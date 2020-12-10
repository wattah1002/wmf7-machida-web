<?php get_header(); ?> <!--headerの呼び出し-->
<!-- メインコンテンツの記述 -->
<main>
	<div id = "mainPhoto">
	</div>
  <?php if(have_posts()): while(have_posts()): the_post(); ?>
    <article <?php post_class( 'article-list' ); ?>>
      <a href="<?php the_permalink(); ?>">
        <?php if (!is_category() && has_category()): ?>
          <h2>
            <?php
              $postcat = get_the_category();
              echo $postcat[0]->name;
            ?>
          </h2>
        <?php endif; ?>
        <div class = "img-wrap">
          <?php if( has_post_thumbnail() ): ?>
            <?php the_post_thumbnail('medium', array('class' => 'article-list-img')); ?>
          <?php else: ?>
            <img src="<?php echo get_template_directory_uri(); ?>/images/no-image.gif" alt="no-img" class="article-list-img"/>
          <?php endif; ?>
        </div>
      </a>
    </article>
  <?php endwhile; endif; ?><!--ループ終了-->
</main>
<?php get_footer(); ?>　<!--footerの呼び出し-->
