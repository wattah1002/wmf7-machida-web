<?php get_header(); ?>  <!--header.phpを取得-->
<div class="container">
  <div class="contents">
      <!--ここに記事一覧に表示したいコンテンツを記述(ここに以下のhtmlをループして表示できるphpコードを記入する)-->
      <article <?php post_class( 'article-list' ); ?>>  <!--クラス名が'article-list'のarticleタグというだけ-->
        <a href="<?php the_permalink(); ?>">  <!--押したらデータが格納されているリンクに飛びますよ的なためのaタグ-->
          <div class="img-wrap">  <!--アイキャッチ画像-->
            <img src="" alt="no-img"/>           <!--画像を追加-->
          <!--カテゴリ(画像の右上の未分類と書いてある部分)-->
            <span class="cat-data">
            </span>
          </div><!--end img-warp-->
          <div class="text">
            <!--タイトル-->
            <h2></h2>
            <!--投稿日を表示-->
            <span class="article-date">
              <i class="far fa-clock"></i>
              <time datetime="">
              </time>
            </span>
            <!--著者を表示-->
            <span class="article-author">
              <i class="fas fa-user"></i>
            </span>
            <!--抜粋(ここに記事の抜粋を入れるためのphpコードを入れる)-->
          </div><!--end text-->
        </a>
      </article>
  </div><!--end contents-->
  <?php get_sidebar(); ?>
</div><!--end container-->
<?php get_footer(); ?>  <!--footer.phpを取得-->
