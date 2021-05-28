(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/codemirror/mode/haskell-literate/haskell-literate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/codemirror/mode/haskell-literate/haskell-literate.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n(function (mod) {\n  if (true) // CommonJS\n    mod(__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"), __webpack_require__(/*! ../haskell/haskell */ \"./node_modules/codemirror/mode/haskell/haskell.js\"))\n  else {}\n})(function (CodeMirror) {\n  \"use strict\"\n\n  CodeMirror.defineMode(\"haskell-literate\", function (config, parserConfig) {\n    var baseMode = CodeMirror.getMode(config, (parserConfig && parserConfig.base) || \"haskell\")\n\n    return {\n      startState: function () {\n        return {\n          inCode: false,\n          baseState: CodeMirror.startState(baseMode)\n        }\n      },\n      token: function (stream, state) {\n        if (stream.sol()) {\n          if (state.inCode = stream.eat(\">\"))\n            return \"meta\"\n        }\n        if (state.inCode) {\n          return baseMode.token(stream, state.baseState)\n        } else {\n          stream.skipToEnd()\n          return \"comment\"\n        }\n      },\n      innerMode: function (state) {\n        return state.inCode ? {state: state.baseState, mode: baseMode} : null\n      }\n    }\n  }, \"haskell\")\n\n  CodeMirror.defineMIME(\"text/x-literate-haskell\", \"haskell-literate\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/codemirror/mode/haskell-literate/haskell-literate.js?");

/***/ }),

/***/ "./node_modules/codemirror/mode/haskell/haskell.js":
/*!*********************************************************!*\
  !*** ./node_modules/codemirror/mode/haskell/haskell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n(function(mod) {\n  if (true) // CommonJS\n    mod(__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"));\n  else {}\n})(function(CodeMirror) {\n\"use strict\";\n\nCodeMirror.defineMode(\"haskell\", function(_config, modeConfig) {\n\n  function switchState(source, setState, f) {\n    setState(f);\n    return f(source, setState);\n  }\n\n  // These should all be Unicode extended, as per the Haskell 2010 report\n  var smallRE = /[a-z_]/;\n  var largeRE = /[A-Z]/;\n  var digitRE = /\\d/;\n  var hexitRE = /[0-9A-Fa-f]/;\n  var octitRE = /[0-7]/;\n  var idRE = /[a-z_A-Z0-9'\\xa1-\\uffff]/;\n  var symbolRE = /[-!#$%&*+.\\/<=>?@\\\\^|~:]/;\n  var specialRE = /[(),;[\\]`{}]/;\n  var whiteCharRE = /[ \\t\\v\\f]/; // newlines are handled in tokenizer\n\n  function normal(source, setState) {\n    if (source.eatWhile(whiteCharRE)) {\n      return null;\n    }\n\n    var ch = source.next();\n    if (specialRE.test(ch)) {\n      if (ch == '{' && source.eat('-')) {\n        var t = \"comment\";\n        if (source.eat('#')) {\n          t = \"meta\";\n        }\n        return switchState(source, setState, ncomment(t, 1));\n      }\n      return null;\n    }\n\n    if (ch == '\\'') {\n      if (source.eat('\\\\')) {\n        source.next();  // should handle other escapes here\n      }\n      else {\n        source.next();\n      }\n      if (source.eat('\\'')) {\n        return \"string\";\n      }\n      return \"string error\";\n    }\n\n    if (ch == '\"') {\n      return switchState(source, setState, stringLiteral);\n    }\n\n    if (largeRE.test(ch)) {\n      source.eatWhile(idRE);\n      if (source.eat('.')) {\n        return \"qualifier\";\n      }\n      return \"variable-2\";\n    }\n\n    if (smallRE.test(ch)) {\n      source.eatWhile(idRE);\n      return \"variable\";\n    }\n\n    if (digitRE.test(ch)) {\n      if (ch == '0') {\n        if (source.eat(/[xX]/)) {\n          source.eatWhile(hexitRE); // should require at least 1\n          return \"integer\";\n        }\n        if (source.eat(/[oO]/)) {\n          source.eatWhile(octitRE); // should require at least 1\n          return \"number\";\n        }\n      }\n      source.eatWhile(digitRE);\n      var t = \"number\";\n      if (source.match(/^\\.\\d+/)) {\n        t = \"number\";\n      }\n      if (source.eat(/[eE]/)) {\n        t = \"number\";\n        source.eat(/[-+]/);\n        source.eatWhile(digitRE); // should require at least 1\n      }\n      return t;\n    }\n\n    if (ch == \".\" && source.eat(\".\"))\n      return \"keyword\";\n\n    if (symbolRE.test(ch)) {\n      if (ch == '-' && source.eat(/-/)) {\n        source.eatWhile(/-/);\n        if (!source.eat(symbolRE)) {\n          source.skipToEnd();\n          return \"comment\";\n        }\n      }\n      var t = \"variable\";\n      if (ch == ':') {\n        t = \"variable-2\";\n      }\n      source.eatWhile(symbolRE);\n      return t;\n    }\n\n    return \"error\";\n  }\n\n  function ncomment(type, nest) {\n    if (nest == 0) {\n      return normal;\n    }\n    return function(source, setState) {\n      var currNest = nest;\n      while (!source.eol()) {\n        var ch = source.next();\n        if (ch == '{' && source.eat('-')) {\n          ++currNest;\n        }\n        else if (ch == '-' && source.eat('}')) {\n          --currNest;\n          if (currNest == 0) {\n            setState(normal);\n            return type;\n          }\n        }\n      }\n      setState(ncomment(type, currNest));\n      return type;\n    };\n  }\n\n  function stringLiteral(source, setState) {\n    while (!source.eol()) {\n      var ch = source.next();\n      if (ch == '\"') {\n        setState(normal);\n        return \"string\";\n      }\n      if (ch == '\\\\') {\n        if (source.eol() || source.eat(whiteCharRE)) {\n          setState(stringGap);\n          return \"string\";\n        }\n        if (source.eat('&')) {\n        }\n        else {\n          source.next(); // should handle other escapes here\n        }\n      }\n    }\n    setState(normal);\n    return \"string error\";\n  }\n\n  function stringGap(source, setState) {\n    if (source.eat('\\\\')) {\n      return switchState(source, setState, stringLiteral);\n    }\n    source.next();\n    setState(normal);\n    return \"error\";\n  }\n\n\n  var wellKnownWords = (function() {\n    var wkw = {};\n    function setType(t) {\n      return function () {\n        for (var i = 0; i < arguments.length; i++)\n          wkw[arguments[i]] = t;\n      };\n    }\n\n    setType(\"keyword\")(\n      \"case\", \"class\", \"data\", \"default\", \"deriving\", \"do\", \"else\", \"foreign\",\n      \"if\", \"import\", \"in\", \"infix\", \"infixl\", \"infixr\", \"instance\", \"let\",\n      \"module\", \"newtype\", \"of\", \"then\", \"type\", \"where\", \"_\");\n\n    setType(\"keyword\")(\n      \"\\.\\.\", \":\", \"::\", \"=\", \"\\\\\", \"<-\", \"->\", \"@\", \"~\", \"=>\");\n\n    setType(\"builtin\")(\n      \"!!\", \"$!\", \"$\", \"&&\", \"+\", \"++\", \"-\", \".\", \"/\", \"/=\", \"<\", \"<*\", \"<=\",\n      \"<$>\", \"<*>\", \"=<<\", \"==\", \">\", \">=\", \">>\", \">>=\", \"^\", \"^^\", \"||\", \"*\",\n      \"*>\", \"**\");\n\n    setType(\"builtin\")(\n      \"Applicative\", \"Bool\", \"Bounded\", \"Char\", \"Double\", \"EQ\", \"Either\", \"Enum\",\n      \"Eq\", \"False\", \"FilePath\", \"Float\", \"Floating\", \"Fractional\", \"Functor\",\n      \"GT\", \"IO\", \"IOError\", \"Int\", \"Integer\", \"Integral\", \"Just\", \"LT\", \"Left\",\n      \"Maybe\", \"Monad\", \"Nothing\", \"Num\", \"Ord\", \"Ordering\", \"Rational\", \"Read\",\n      \"ReadS\", \"Real\", \"RealFloat\", \"RealFrac\", \"Right\", \"Show\", \"ShowS\",\n      \"String\", \"True\");\n\n    setType(\"builtin\")(\n      \"abs\", \"acos\", \"acosh\", \"all\", \"and\", \"any\", \"appendFile\", \"asTypeOf\",\n      \"asin\", \"asinh\", \"atan\", \"atan2\", \"atanh\", \"break\", \"catch\", \"ceiling\",\n      \"compare\", \"concat\", \"concatMap\", \"const\", \"cos\", \"cosh\", \"curry\",\n      \"cycle\", \"decodeFloat\", \"div\", \"divMod\", \"drop\", \"dropWhile\", \"either\",\n      \"elem\", \"encodeFloat\", \"enumFrom\", \"enumFromThen\", \"enumFromThenTo\",\n      \"enumFromTo\", \"error\", \"even\", \"exp\", \"exponent\", \"fail\", \"filter\",\n      \"flip\", \"floatDigits\", \"floatRadix\", \"floatRange\", \"floor\", \"fmap\",\n      \"foldl\", \"foldl1\", \"foldr\", \"foldr1\", \"fromEnum\", \"fromInteger\",\n      \"fromIntegral\", \"fromRational\", \"fst\", \"gcd\", \"getChar\", \"getContents\",\n      \"getLine\", \"head\", \"id\", \"init\", \"interact\", \"ioError\", \"isDenormalized\",\n      \"isIEEE\", \"isInfinite\", \"isNaN\", \"isNegativeZero\", \"iterate\", \"last\",\n      \"lcm\", \"length\", \"lex\", \"lines\", \"log\", \"logBase\", \"lookup\", \"map\",\n      \"mapM\", \"mapM_\", \"max\", \"maxBound\", \"maximum\", \"maybe\", \"min\", \"minBound\",\n      \"minimum\", \"mod\", \"negate\", \"not\", \"notElem\", \"null\", \"odd\", \"or\",\n      \"otherwise\", \"pi\", \"pred\", \"print\", \"product\", \"properFraction\", \"pure\",\n      \"putChar\", \"putStr\", \"putStrLn\", \"quot\", \"quotRem\", \"read\", \"readFile\",\n      \"readIO\", \"readList\", \"readLn\", \"readParen\", \"reads\", \"readsPrec\",\n      \"realToFrac\", \"recip\", \"rem\", \"repeat\", \"replicate\", \"return\", \"reverse\",\n      \"round\", \"scaleFloat\", \"scanl\", \"scanl1\", \"scanr\", \"scanr1\", \"seq\",\n      \"sequence\", \"sequence_\", \"show\", \"showChar\", \"showList\", \"showParen\",\n      \"showString\", \"shows\", \"showsPrec\", \"significand\", \"signum\", \"sin\",\n      \"sinh\", \"snd\", \"span\", \"splitAt\", \"sqrt\", \"subtract\", \"succ\", \"sum\",\n      \"tail\", \"take\", \"takeWhile\", \"tan\", \"tanh\", \"toEnum\", \"toInteger\",\n      \"toRational\", \"truncate\", \"uncurry\", \"undefined\", \"unlines\", \"until\",\n      \"unwords\", \"unzip\", \"unzip3\", \"userError\", \"words\", \"writeFile\", \"zip\",\n      \"zip3\", \"zipWith\", \"zipWith3\");\n\n    var override = modeConfig.overrideKeywords;\n    if (override) for (var word in override) if (override.hasOwnProperty(word))\n      wkw[word] = override[word];\n\n    return wkw;\n  })();\n\n\n\n  return {\n    startState: function ()  { return { f: normal }; },\n    copyState:  function (s) { return { f: s.f }; },\n\n    token: function(stream, state) {\n      var t = state.f(stream, function(s) { state.f = s; });\n      var w = stream.current();\n      return wellKnownWords.hasOwnProperty(w) ? wellKnownWords[w] : t;\n    },\n\n    blockCommentStart: \"{-\",\n    blockCommentEnd: \"-}\",\n    lineComment: \"--\"\n  };\n\n});\n\nCodeMirror.defineMIME(\"text/x-haskell\", \"haskell\");\n\n});\n\n\n//# sourceURL=webpack:///./node_modules/codemirror/mode/haskell/haskell.js?");

/***/ })

}]);