<?php get_header(); ?> <!--headerの呼び出し-->
<div class="container">
    <?php if(have_posts()): the_post(); ?>
      <article <?php post_class( 'article-content' ); ?>>
        <!--タグ-->
        <div class="article-tag">
          <?php the_tags('<ul><li>','</li><li>','</li></ul>'
        ); ?>
        </div>
        <!--タイトル-->
        <h1><?php the_title(); ?></h1>
        <!--アイキャッチ取得-->
        <div class="article-img">
          <?php if( has_post_thumbnail() ): ?>
            <?php the_post_thumbnail( 'large' ); ?>
          <?php endif; ?>
        </div>
        <!--本文取得-->
        <?php the_content(); ?>
      </article>
    <?php endif; ?>
</div><!--end container-->
<?php get_footer(); ?>　<!--footerの呼び出し-->
