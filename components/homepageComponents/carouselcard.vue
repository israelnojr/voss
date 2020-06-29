<template>
  <div class="custom-card" style="margin-right:20px">
    <div class="custom-card--img">
      <div class="custom-card--info">
        <ul class="custom-card--labels d-flex">
          <li>
            <span class="badge badge-pill badge-warning"
              ><i class="la la-star"></i
            ></span>
          </li>
        </ul>
        <div class="dropdown dropdown-icon">
          <a
            href="javascript:void(0);"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ion-md-more"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-right">
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link favorite">
                <i class="la la-heart-o"></i>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-plus"></i>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-download"></i>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-share-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="javascript:void(0);"
        class="external"
        data-audio='{"name": "I Love You Mummy", "artist": "Arebica Luna", "album": "Mummy", "url": "../../assets/audio/ringtone-1.mp3", "cover_art_url": "../../assets/images/cover/small/1.jpg"}'
      >
        <img
          src="../../assets/images/cover/large/1.jpg"
          alt="I Love You Mummy"
          class="card-img--radius-lg"
        />
      </a>
    </div>

    <a href="song-details.html" class="custom-card--link mt-2">
      <h6>I Love You Mummy</h6>
      <p>Arebica Luna</p>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
