(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/codemirror/mode/asn.1/asn.1.js":
/*!*****************************************************!*\
  !*** ./node_modules/codemirror/mode/asn.1/asn.1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// CodeMirror, copyright (c) by Marijn Haverbeke and others\n// Distributed under an MIT license: https://codemirror.net/LICENSE\n\n(function(mod) {\n  if (true) // CommonJS\n    mod(__webpack_require__(/*! ../../lib/codemirror */ \"./node_modules/codemirror/lib/codemirror.js\"));\n  else {}\n})(function(CodeMirror) {\n  \"use strict\";\n\n  CodeMirror.defineMode(\"asn.1\", function(config, parserConfig) {\n    var indentUnit = config.indentUnit,\n        keywords = parserConfig.keywords || {},\n        cmipVerbs = parserConfig.cmipVerbs || {},\n        compareTypes = parserConfig.compareTypes || {},\n        status = parserConfig.status || {},\n        tags = parserConfig.tags || {},\n        storage = parserConfig.storage || {},\n        modifier = parserConfig.modifier || {},\n        accessTypes = parserConfig.accessTypes|| {},\n        multiLineStrings = parserConfig.multiLineStrings,\n        indentStatements = parserConfig.indentStatements !== false;\n    var isOperatorChar = /[\\|\\^]/;\n    var curPunc;\n\n    function tokenBase(stream, state) {\n      var ch = stream.next();\n      if (ch == '\"' || ch == \"'\") {\n        state.tokenize = tokenString(ch);\n        return state.tokenize(stream, state);\n      }\n      if (/[\\[\\]\\(\\){}:=,;]/.test(ch)) {\n        curPunc = ch;\n        return \"punctuation\";\n      }\n      if (ch == \"-\"){\n        if (stream.eat(\"-\")) {\n          stream.skipToEnd();\n          return \"comment\";\n        }\n      }\n      if (/\\d/.test(ch)) {\n        stream.eatWhile(/[\\w\\.]/);\n        return \"number\";\n      }\n      if (isOperatorChar.test(ch)) {\n        stream.eatWhile(isOperatorChar);\n        return \"operator\";\n      }\n\n      stream.eatWhile(/[\\w\\-]/);\n      var cur = stream.current();\n      if (keywords.propertyIsEnumerable(cur)) return \"keyword\";\n      if (cmipVerbs.propertyIsEnumerable(cur)) return \"variable cmipVerbs\";\n      if (compareTypes.propertyIsEnumerable(cur)) return \"atom compareTypes\";\n      if (status.propertyIsEnumerable(cur)) return \"comment status\";\n      if (tags.propertyIsEnumerable(cur)) return \"variable-3 tags\";\n      if (storage.propertyIsEnumerable(cur)) return \"builtin storage\";\n      if (modifier.propertyIsEnumerable(cur)) return \"string-2 modifier\";\n      if (accessTypes.propertyIsEnumerable(cur)) return \"atom accessTypes\";\n\n      return \"variable\";\n    }\n\n    function tokenString(quote) {\n      return function(stream, state) {\n        var escaped = false, next, end = false;\n        while ((next = stream.next()) != null) {\n          if (next == quote && !escaped){\n            var afterNext = stream.peek();\n            //look if the character if the quote is like the B in '10100010'B\n            if (afterNext){\n              afterNext = afterNext.toLowerCase();\n              if(afterNext == \"b\" || afterNext == \"h\" || afterNext == \"o\")\n                stream.next();\n            }\n            end = true; break;\n          }\n          escaped = !escaped && next == \"\\\\\";\n        }\n        if (end || !(escaped || multiLineStrings))\n          state.tokenize = null;\n        return \"string\";\n      };\n    }\n\n    function Context(indented, column, type, align, prev) {\n      this.indented = indented;\n      this.column = column;\n      this.type = type;\n      this.align = align;\n      this.prev = prev;\n    }\n    function pushContext(state, col, type) {\n      var indent = state.indented;\n      if (state.context && state.context.type == \"statement\")\n        indent = state.context.indented;\n      return state.context = new Context(indent, col, type, null, state.context);\n    }\n    function popContext(state) {\n      var t = state.context.type;\n      if (t == \")\" || t == \"]\" || t == \"}\")\n        state.indented = state.context.indented;\n      return state.context = state.context.prev;\n    }\n\n    //Interface\n    return {\n      startState: function(basecolumn) {\n        return {\n          tokenize: null,\n          context: new Context((basecolumn || 0) - indentUnit, 0, \"top\", false),\n          indented: 0,\n          startOfLine: true\n        };\n      },\n\n      token: function(stream, state) {\n        var ctx = state.context;\n        if (stream.sol()) {\n          if (ctx.align == null) ctx.align = false;\n          state.indented = stream.indentation();\n          state.startOfLine = true;\n        }\n        if (stream.eatSpace()) return null;\n        curPunc = null;\n        var style = (state.tokenize || tokenBase)(stream, state);\n        if (style == \"comment\") return style;\n        if (ctx.align == null) ctx.align = true;\n\n        if ((curPunc == \";\" || curPunc == \":\" || curPunc == \",\")\n            && ctx.type == \"statement\"){\n          popContext(state);\n        }\n        else if (curPunc == \"{\") pushContext(state, stream.column(), \"}\");\n        else if (curPunc == \"[\") pushContext(state, stream.column(), \"]\");\n        else if (curPunc == \"(\") pushContext(state, stream.column(), \")\");\n        else if (curPunc == \"}\") {\n          while (ctx.type == \"statement\") ctx = popContext(state);\n          if (ctx.type == \"}\") ctx = popContext(state);\n          while (ctx.type == \"statement\") ctx = popContext(state);\n        }\n        else if (curPunc == ctx.type) popContext(state);\n        else if (indentStatements && (((ctx.type == \"}\" || ctx.type == \"top\")\n            && curPunc != ';') || (ctx.type == \"statement\"\n            && curPunc == \"newstatement\")))\n          pushContext(state, stream.column(), \"statement\");\n\n        state.startOfLine = false;\n        return style;\n      },\n\n      electricChars: \"{}\",\n      lineComment: \"--\",\n      fold: \"brace\"\n    };\n  });\n\n  function words(str) {\n    var obj = {}, words = str.split(\" \");\n    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;\n    return obj;\n  }\n\n  CodeMirror.defineMIME(\"text/x-ttcn-asn\", {\n    name: \"asn.1\",\n    keywords: words(\"DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION\" +\n    \" REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED\" +\n    \" WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN\" +\n    \" IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS\" +\n    \" MINACCESS MAXACCESS REVISION STATUS DESCRIPTION\" +\n    \" SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName\" +\n    \" ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY\" +\n    \" IMPLIED EXPORTS\"),\n    cmipVerbs: words(\"ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE\"),\n    compareTypes: words(\"OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY\" +\n    \" MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY\" +\n    \" OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL\" +\n    \" SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL\" +\n    \" TEXTUAL-CONVENTION\"),\n    status: words(\"current deprecated mandatory obsolete\"),\n    tags: words(\"APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS\" +\n    \" UNIVERSAL\"),\n    storage: words(\"BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING\" +\n    \" UTCTime InterfaceIndex IANAifType CMIP-Attribute\" +\n    \" REAL PACKAGE PACKAGES IpAddress PhysAddress\" +\n    \" NetworkAddress BITS BMPString TimeStamp TimeTicks\" +\n    \" TruthValue RowStatus DisplayString GeneralString\" +\n    \" GraphicString IA5String NumericString\" +\n    \" PrintableString SnmpAdminString TeletexString\" +\n    \" UTF8String VideotexString VisibleString StringStore\" +\n    \" ISO646String T61String UniversalString Unsigned32\" +\n    \" Integer32 Gauge Gauge32 Counter Counter32 Counter64\"),\n    modifier: words(\"ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS\" +\n    \" GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS\" +\n    \" DEFINED\"),\n    accessTypes: words(\"not-accessible accessible-for-notify read-only\" +\n    \" read-create read-write\"),\n    multiLineStrings: true\n  });\n});\n\n\n//# sourceURL=webpack:///./node_modules/codemirror/mode/asn.1/asn.1.js?");

/***/ })

}]);