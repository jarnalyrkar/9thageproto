<?php include($_SERVER["DOCUMENT_ROOT"] . "/9thageproto/lib/ti.php") ?>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/9thageproto/partials/_header.php") ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <?php startblock('army_image_url') ?>

      <?php endblock() ?>
    </div>

    <div class="col-6">
      <h1>
        <?php startblock('army_title') ?>
        <?php endblock() ?>
      </h1>

      <p>
      <?php startblock('intro_text') ?>
      <?php endblock() ?>
      </p>

      <p>
      <?php startblock('main_text') ?>
      <?php endblock() ?>
      </p>
    </div>
  </div>
</div>
