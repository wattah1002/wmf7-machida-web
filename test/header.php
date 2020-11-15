<!DOCTYPE html><!--htmlで書かれていることを宣言-->
<html lang="ja"><!--日本語のサイトであることを指定-->
<head>
<meta charset="utf-8"><!--エンコードがUTF-8であることを指定-->
<meta name="viewport" content="width=device-width, initial-scale=1.0 "><!--viewportの設定-->
<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>"><!--スタイルシートの呼び出し-->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"><!--font-awesomeのスタイルシートの呼び出し-->

<?php wp_head(); ?><!--システム・プラグイン用-->
</head>
<body <?php body_class(); ?>>
<header>
  <div class="header-inner">
    <?php
    if(is_home() || is_front_page()) {
      $title_tag_start = '<h1 class="site-title">';
      $title_tag_end = '</h1>';
    } else {
      $title_tag_start = '<p class="site-title">';
      $title_tag_end =  '</p>';
    }
    ?>
    <div class="site-title-wrap">
      <?php echo $title_tag_start; ?>
        <a href="<?php echo home_url(); ?>">
          <?php bloginfo( 'name' ); ?>
        </a>
      <?php echo $title_tag_end; ?>
    </div>
    <!--スマホ用メニューボタン-->
    <button type="button" id="navbutton" class="navbutton">
      <i class="fas fa-bars"></i>
    </button>
    <!--ヘッダーメニュー-->
    <div id="header-nav-wrap" class="header-nav-wrap">
    <?php wp_nav_menu( array(
          'theme_location' => 'header-nav',
          'container' => 'nav',
          'container_class' => 'header-nav',
          'container_id' => 'header-nav',
          'fallback_cb' => ''
    ) ); ?>
    </div>
  </div><!--end header-inner-->
</header>
