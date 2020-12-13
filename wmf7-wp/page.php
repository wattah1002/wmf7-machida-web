<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello!</title>
    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style-scroll.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollTrigger.min.js"></script>
    <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
</head>


<body id="all_wrapper">
  <div id="content_wrapper">

    <main>
      <ul id="rulers">
        <li id="ruler1" class="h_200"></li>
        <li id="ruler2" class="h_200"></li>
        <li id="ruler3" class="h_300"></li>
        <li id="ruler4" class="h_200"></li>
        <li id="ruler5" class="h_300"></li>
        <li id="ruler6" class="h_300"></li>
        <li id="ruler7" class="h_300"></li>
        <li id="ruler8" class="h_200"></li>
        <li id="ruler9" class="h_200"></li>
        <li id="ruler10" class="h_300"></li>
        <li id="ruler11" class="h_300"></li>
        <li id="ruler12"></li>
        <li id="ruler13"></li>
        <li id="ruler14"></li>
        <li id="ruler15"></li>
      </ul>
    </main>
    <footer>
      <a href="<?php echo get_tag_link(8); ?>">
        <h1>ジンルイメツボウ作品はこちら</h1>
      </a>
    </footer>
    <div id="background" class="bg"></div>
  </div>

  <div id="img_wrapper">
        <img src="https://cdn.glitch.com/6c02ced5-b4c2-496f-bd68-adaf38e6ae78%2FIMG_1307.PNG?v=1605716278027" class="meteo1 meteo2 meteo3">
        <img src="https://cdn.glitch.com/6c02ced5-b4c2-496f-bd68-adaf38e6ae78%2FIMG_1306.PNG?v=1605716281033" class="meteo4">
        <img src="https://cdn.glitch.com/6c02ced5-b4c2-496f-bd68-adaf38e6ae78%2FIMG_1318.PNG?v=1605716284334" class="smoke smoke1">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0054.png?v=1607439438103" class="smoke smoke2">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0054.png?v=1607439438103" class="smoke smoke3 smoke9">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0160.png?v=1607440198976" class="smoke smoke4">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0204.png?v=1607440200572" class="smoke smoke5">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0295.png?v=1607440203814" class="smoke smoke6">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0440.png?v=1607531483246" class="smoke smoke7">
        <img src="https://cdn.glitch.com/d27d8bf8-f607-4f5e-8851-6bf240e617f1%2F0465.png?v=1607529772182" class="smoke smoke8">
      </div>

  <div id="pc">↓↓↓</div>

    <script src="<?php echo get_template_directory_uri(); ?>/script.js" defer></script>
</body>
</html>
