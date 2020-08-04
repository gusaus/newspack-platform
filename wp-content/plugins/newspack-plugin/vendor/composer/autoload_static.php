<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita02e6671091933b87c13d0bf992d62c6
{
    public static $prefixLengthsPsr4 = array (
        'j' => 
        array (
            'joshtronic\\' => 11,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'joshtronic\\' => 
        array (
            0 => __DIR__ . '/..' . '/joshtronic/php-loremipsum/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita02e6671091933b87c13d0bf992d62c6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita02e6671091933b87c13d0bf992d62c6::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
