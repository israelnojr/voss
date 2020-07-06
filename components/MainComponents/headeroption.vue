<template>
  <!-- Begin | Header Options -->
  <ul class="header-options d-flex align-items-center">
    <li>
      <a
        href="javascript:void(0);"
        data-toggle="modal"
        data-target="#lang"
        class="language"
      >
        <span>Language</span>
        <img src="~/assets/images/svg/translate.svg" alt="" />
      </a>
    </li>
    <li class="dropdown fade-in">
      <a
        href="javascript:void(0);"
        class="d-flex align-items-center py-2"
        role="button"
        id="userMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <div class="avatar avatar-sm avatar-circle">
          <img src="~/assets/images/users/thumb.jpg" alt="user" />
        </div>
        <span class="pl-2">Halo Admin</span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
        <a class="dropdown-item" href="profile.html"
          ><i class="ion-md-contact"></i> <span>Profile</span></a
        >
        <a class="dropdown-item" href="plan.html"
          ><i class="ion-md-radio-button-off"></i> <span>Your Plan</span></a
        >
        <a class="dropdown-item" href="settings.html"
          ><i class="ion-md-settings"></i> <span>Settings</span></a
        >
        <div class="dropdown-divider"></div>
        <div class="px-4 py-2">
          <a href="#" class="btn btn-sm btn-air btn-pill btn-danger">Logout</a>
        </div>
      </div>
    </li>
  </ul>
  <!-- End | Header Options -->
</template>

<script>
export default {};
</script>

<style></style>
