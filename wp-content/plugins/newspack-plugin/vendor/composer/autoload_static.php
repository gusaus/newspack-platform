<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitca0996e67c5790d6ec51baf67af0880d
{
    public static $files = array (
        '7b11c4dc42b3b3023073cb14e519683c' => __DIR__ . '/..' . '/ralouphie/getallheaders/src/getallheaders.php',
        'c964ee0ededf28c96ebd9db5099ef910' => __DIR__ . '/..' . '/guzzlehttp/promises/src/functions_include.php',
        '6e3fae29631ef280660b3cdad06f25a8' => __DIR__ . '/..' . '/symfony/deprecation-contracts/function.php',
        '37a3dc5111fe8f707ab4c132ef1dbc62' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
    );

    public static $prefixLengthsPsr4 = array (
        'j' => 
        array (
            'joshtronic\\' => 11,
        ),
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
            'Psr\\Cache\\' => 10,
        ),
        'G' => 
        array (
            'GuzzleHttp\\Psr7\\' => 16,
            'GuzzleHttp\\Promise\\' => 19,
            'GuzzleHttp\\' => 11,
            'Google\\Auth\\' => 12,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
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
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
            1 => __DIR__ . '/..' . '/psr/http-factory/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'Psr\\Cache\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/cache/src',
        ),
        'GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
        'Google\\Auth\\' => 
        array (
            0 => __DIR__ . '/..' . '/google/auth/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Newspack\\AMP_Enhancements' => __DIR__ . '/../..' . '/includes/class-amp-enhancements.php',
        'Newspack\\API' => __DIR__ . '/../..' . '/includes/class-api.php',
        'Newspack\\API\\Plugins_Controller' => __DIR__ . '/../..' . '/includes/api/class-plugins-controller.php',
        'Newspack\\API\\Wizards_Controller' => __DIR__ . '/../..' . '/includes/api/class-wizards-controller.php',
        'Newspack\\Admin_Plugins_Screen' => __DIR__ . '/../..' . '/includes/class-admin-plugins-screen.php',
        'Newspack\\Advertising_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-advertising-wizard.php',
        'Newspack\\Analytics' => __DIR__ . '/../..' . '/includes/analytics/class-analytics.php',
        'Newspack\\Analytics_Dimensions' => __DIR__ . '/../..' . '/includes/analytics/class-analytics-dimensions.php',
        'Newspack\\Analytics_Events' => __DIR__ . '/../..' . '/includes/analytics/class-analytics-events.php',
        'Newspack\\Analytics_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-analytics-wizard.php',
        'Newspack\\Author_Filter' => __DIR__ . '/../..' . '/includes/author-filter/class-author-filter.php',
        'Newspack\\Authors_Custom_Fields' => __DIR__ . '/../..' . '/includes/authors/class-authors-custom-fields.php',
        'Newspack\\Blocks' => __DIR__ . '/../..' . '/includes/class-blocks.php',
        'Newspack\\CLI\\Initializer' => __DIR__ . '/../..' . '/includes/cli/class-initializer.php',
        'Newspack\\CLI\\Setup' => __DIR__ . '/../..' . '/includes/cli/class-setup.php',
        'Newspack\\Components_Demo' => __DIR__ . '/../..' . '/includes/wizards/class-components-demo.php',
        'Newspack\\Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-configuration-manager.php',
        'Newspack\\Configuration_Managers' => __DIR__ . '/../..' . '/includes/configuration_managers/class-configuration-managers.php',
        'Newspack\\Connections_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-connections-wizard.php',
        'Newspack\\Dashboard' => __DIR__ . '/../..' . '/includes/wizards/class-dashboard.php',
        'Newspack\\Data_Events' => __DIR__ . '/../..' . '/includes/data-events/class-data-events.php',
        'Newspack\\Data_Events\\Api' => __DIR__ . '/../..' . '/includes/data-events/class-api.php',
        'Newspack\\Data_Events\\Connectors\\GA4' => __DIR__ . '/../..' . '/includes/data-events/connectors/ga4/class-ga4.php',
        'Newspack\\Data_Events\\Connectors\\GA4\\Event' => __DIR__ . '/../..' . '/includes/data-events/connectors/ga4/class-event.php',
        'Newspack\\Data_Events\\Connectors\\Mailchimp' => __DIR__ . '/../..' . '/includes/data-events/connectors/class-mailchimp.php',
        'Newspack\\Data_Events\\Popups' => __DIR__ . '/../..' . '/includes/data-events/class-popups.php',
        'Newspack\\Data_Events\\Webhooks' => __DIR__ . '/../..' . '/includes/data-events/class-webhooks.php',
        'Newspack\\Donations' => __DIR__ . '/../..' . '/includes/class-donations.php',
        'Newspack\\Emails' => __DIR__ . '/../..' . '/includes/emails/class-emails.php',
        'Newspack\\Engagement_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-engagement-wizard.php',
        'Newspack\\Fivetran_Connection' => __DIR__ . '/../..' . '/includes/oauth/class-fivetran-connection.php',
        'Newspack\\GoogleSiteKit' => __DIR__ . '/../..' . '/includes/plugins/google-site-kit/class-googlesitekit.php',
        'Newspack\\GoogleSiteKitAnalytics' => __DIR__ . '/../..' . '/includes/plugins/google-site-kit/class-googlesitekitanalytics.php',
        'Newspack\\Google_Login' => __DIR__ . '/../..' . '/includes/oauth/class-google-login.php',
        'Newspack\\Google_OAuth' => __DIR__ . '/../..' . '/includes/oauth/class-google-oauth.php',
        'Newspack\\Google_Services_Connection' => __DIR__ . '/../..' . '/includes/oauth/class-google-services-connection.php',
        'Newspack\\GravityForms' => __DIR__ . '/../..' . '/includes/plugins/class-gravityforms.php',
        'Newspack\\Handoff_Banner' => __DIR__ . '/../..' . '/includes/class-handoff-banner.php',
        'Newspack\\Health_Check_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-health-check-wizard.php',
        'Newspack\\Jetpack' => __DIR__ . '/../..' . '/includes/plugins/class-jetpack.php',
        'Newspack\\Jetpack_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-jetpack-configuration-manager.php',
        'Newspack\\Logger' => __DIR__ . '/../..' . '/includes/class-logger.php',
        'Newspack\\Magic_Link' => __DIR__ . '/../..' . '/includes/class-magic-link.php',
        'Newspack\\Mailchimp_API' => __DIR__ . '/../..' . '/includes/oauth/class-mailchimp-api.php',
        'Newspack\\Mailchimp_For_WooCommerce' => __DIR__ . '/../..' . '/includes/plugins/class-mailchimp-for-woocommerce.php',
        'Newspack\\Major_Revision' => __DIR__ . '/../..' . '/includes/revisions-control/class-major-revision.php',
        'Newspack\\Major_Revisions' => __DIR__ . '/../..' . '/includes/revisions-control/class-major-revisions.php',
        'Newspack\\Meta_Pixel' => __DIR__ . '/../..' . '/includes/tracking/class-meta-pixel.php',
        'Newspack\\NRH' => __DIR__ . '/../..' . '/includes/class-nrh.php',
        'Newspack\\Newspack' => __DIR__ . '/../..' . '/includes/class-newspack.php',
        'Newspack\\Newspack_Ads_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-newspack-ads-configuration-manager.php',
        'Newspack\\Newspack_Image_Credits' => __DIR__ . '/../..' . '/includes/class-newspack-image-credits.php',
        'Newspack\\Newspack_Newsletters' => __DIR__ . '/../..' . '/includes/plugins/class-newspack-newsletters.php',
        'Newspack\\Newspack_Newsletters_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-newspack-newsletters-configuration-manager.php',
        'Newspack\\Newspack_Popups_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-newspack-popups-configuration-manager.php',
        'Newspack\\Newspack_Theme_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-newspack-theme-configuration-manager.php',
        'Newspack\\OAuth' => __DIR__ . '/../..' . '/includes/oauth/class-oauth.php',
        'Newspack\\OneSignal' => __DIR__ . '/../..' . '/includes/plugins/class-onesignal.php',
        'Newspack\\Organic_Profile_Block' => __DIR__ . '/../..' . '/includes/plugins/class-organic-profile-block.php',
        'Newspack\\PWA' => __DIR__ . '/../..' . '/includes/class-pwa.php',
        'Newspack\\Parsely_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-parsely-configuration-manager.php',
        'Newspack\\Patches' => __DIR__ . '/../..' . '/includes/class-patches.php',
        'Newspack\\Perfmatters' => __DIR__ . '/../..' . '/includes/plugins/class-perfmatters.php',
        'Newspack\\Performance' => __DIR__ . '/../..' . '/includes/class-performance.php',
        'Newspack\\Pixel' => __DIR__ . '/../..' . '/includes/tracking/class-pixel.php',
        'Newspack\\Plugin_Manager' => __DIR__ . '/../..' . '/includes/class-plugin-manager.php',
        'Newspack\\Popups_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-popups-wizard.php',
        'Newspack\\Profile' => __DIR__ . '/../..' . '/includes/class-profile.php',
        'Newspack\\Publish_To_Apple_News_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-publish-to-apple-news-configuration-manager.php',
        'Newspack\\RSS' => __DIR__ . '/../..' . '/includes/optional-modules/class-rss.php',
        'Newspack\\Reader_Activation' => __DIR__ . '/../..' . '/includes/reader-activation/class-reader-activation.php',
        'Newspack\\Reader_Activation_Emails' => __DIR__ . '/../..' . '/includes/reader-activation/class-reader-activation-emails.php',
        'Newspack\\Reader_Revenue_Emails' => __DIR__ . '/../..' . '/includes/reader-revenue/class-reader-revenue-emails.php',
        'Newspack\\Reader_Revenue_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-reader-revenue-wizard.php',
        'Newspack\\Recaptcha' => __DIR__ . '/../..' . '/includes/class-recaptcha.php',
        'Newspack\\Revisions_Control' => __DIR__ . '/../..' . '/includes/revisions-control/class-revisions-control.php',
        'Newspack\\SEO_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-seo-wizard.php',
        'Newspack\\Salesforce' => __DIR__ . '/../..' . '/includes/class-salesforce.php',
        'Newspack\\Settings' => __DIR__ . '/../..' . '/includes/wizards/class-settings.php',
        'Newspack\\Setup_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-setup-wizard.php',
        'Newspack\\Site_Design_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-site-design-wizard.php',
        'Newspack\\Site_Kit_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-site-kit-configuration-manager.php',
        'Newspack\\Starter_Content' => __DIR__ . '/../..' . '/includes/class-starter-content.php',
        'Newspack\\Starter_Content_Generated' => __DIR__ . '/../..' . '/includes/starter_content/class-starter-content-generated.php',
        'Newspack\\Starter_Content_Provider' => __DIR__ . '/../..' . '/includes/starter_content/class-starter-content-provider.php',
        'Newspack\\Starter_Content_WordPress' => __DIR__ . '/../..' . '/includes/starter_content/class-starter-content-wordpress.php',
        'Newspack\\Stripe_Connection' => __DIR__ . '/../..' . '/includes/reader-revenue/stripe/class-stripe-connection.php',
        'Newspack\\Stripe_Sync' => __DIR__ . '/../..' . '/includes/reader-revenue/stripe/class-stripe-sync.php',
        'Newspack\\Stripe_Webhooks' => __DIR__ . '/../..' . '/includes/reader-revenue/stripe/class-stripe-webhooks.php',
        'Newspack\\Syndication_Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-syndication-wizard.php',
        'Newspack\\Theme_Manager' => __DIR__ . '/../..' . '/includes/class-theme-manager.php',
        'Newspack\\Twitter_Pixel' => __DIR__ . '/../..' . '/includes/tracking/class-twitter-pixel.php',
        'Newspack\\Wizard' => __DIR__ . '/../..' . '/includes/wizards/class-wizard.php',
        'Newspack\\Wizards' => __DIR__ . '/../..' . '/includes/class-wizards.php',
        'Newspack\\WooCommerce_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-woocommerce-configuration-manager.php',
        'Newspack\\WooCommerce_Connection' => __DIR__ . '/../..' . '/includes/reader-revenue/class-woocommerce-connection.php',
        'Newspack\\WooCommerce_My_Account' => __DIR__ . '/../..' . '/includes/reader-revenue/my-account/class-woocommerce-my-account.php',
        'Newspack\\WordPress_SEO_Configuration_Manager' => __DIR__ . '/../..' . '/includes/configuration_managers/class-wordpress-seo-configuration-manager.php',
        'Popups_Analytics_Utils' => __DIR__ . '/../..' . '/includes/popups-analytics/class-popups-analytics-utils.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitca0996e67c5790d6ec51baf67af0880d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitca0996e67c5790d6ec51baf67af0880d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitca0996e67c5790d6ec51baf67af0880d::$classMap;

        }, null, ClassLoader::class);
    }
}
