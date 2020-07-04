<template>
  <main id="pageWrapper">
    <!-- Begin | Main Container [[ Find at scss/base/core.scss ]] -->
    <div class="main-container" id="appRoute">
      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle title="Top Chart" subTitle="Listen top chart" />
        <Carousel :songs="songs" />
      </div>
      <!-- End | Section -->

      <div class="row">
        <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
        <div class="section col-xl-7 col-lg-6">
          <div class="row h-100">
            <div class="col-sm-5 pb-4">
              <div
                class="h-100 event event-v bg-img bg-img-radius-lg"
                style="background-image: url('../assets/images/background/vertical/1.jpg')"
              >
                <div class="event-content p-4">
                  <a href="event-details.html"><h6>New Year Party</h6></a>
                  <span class="countdown mb-3"></span>
                  <a
                    href="#"
                    class="btn btn-bold btn-pill btn-air btn-warning btn-sm"
                    >Buy Ticket</a
                  >
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="h-50 pb-4">
                <div
                  class="h-100 event event-h bg-img bg-img-radius-lg"
                  style="background-image: url('../assets/images/background/horizontal/1.jpg')"
                >
                  <div class="event-content p-4">
                    <a href="event-details.html"
                      ><h6>Dance with DJ Nowan</h6></a
                    >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae consectetur, ex explicabo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="h-50 pb-4">
                <div
                  class="h-100 event event-h bg-img bg-img-radius-lg"
                  style="background-image: url('../assets/images/background/horizontal/2.jpg')"
                >
                  <div class="event-content p-4">
                    <a href="event-details.html"><h6>Move You's Legs</h6></a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae consectetur, ex explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End | Section -->

        <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
        <div class="section col-xl-5 col-lg-6">
          <!-- Begin | Line Tabs [[ Find at scss/framework/components/line-tabs.scss ]] -->
          <ul
            class="nav nav-tabs line-tabs line-tabs-primary text-uppercase mb-4"
            id="songsList"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                id="recent-tab"
                data-toggle="tab"
                href="#recent"
                role="tab"
                aria-controls="recent"
                aria-selected="true"
                >Recent</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="trending-tab"
                data-toggle="tab"
                href="#trending"
                role="tab"
                aria-controls="trending"
                aria-selected="false"
                >Trending</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="international-tab"
                data-toggle="tab"
                href="#international"
                role="tab"
                aria-controls="international"
                aria-selected="false"
                >International</a
              >
            </li>
          </ul>
          <!-- End | Line Tabs -->

          <!-- Begin | Tab Content -->
          <div class="tab-content" id="songsListContent">
            <div
              class="tab-pane fade show active"
              id="recent"
              role="tabpanel"
              aria-labelledby="recent-tab"
            >
              <!-- Begin | Custom List [[ Find at scss/framework/components/custom-list.scss ]] -->
              <div class="custom-list">
                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/1.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">I Love You Mummy</p>
                      <p class="text-truncate text-muted font-sm">
                        Arebica Luna
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/2.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Shack your butty</p>
                      <p class="text-truncate text-muted font-sm">
                        Gerrina Linda
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/3.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Do it your way(Female)</p>
                      <p class="text-truncate text-muted font-sm">
                        Zunira Willy & Nutty Nina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/4.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Say yes</p>
                      <p class="text-truncate text-muted font-sm">
                        Johnny Marro
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/5.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Where is your letter</p>
                      <p class="text-truncate text-muted font-sm">
                        Jina Moore & Lenisa Gory
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/6.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Hey not me</p>
                      <p class="text-truncate text-muted font-sm">
                        Rasomi Pelina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/7.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Deep inside</p>
                      <p class="text-truncate text-muted font-sm">
                        Pimila Holliwy
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->
              </div>
              <!-- End | Custom List -->
            </div>
            <div
              class="tab-pane fade"
              id="trending"
              role="tabpanel"
              aria-labelledby="trending-tab"
            >
              <!-- Begin | Custom List [[ Find at scss/framework/components/custom-list.scss ]] -->
              <div class="custom-list">
                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/1.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">I Love You Mummy</p>
                      <p class="text-truncate text-muted font-sm">
                        Arebica Luna
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/2.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Shack your butty</p>
                      <p class="text-truncate text-muted font-sm">
                        Gerrina Linda
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/3.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Do it your way(Female)</p>
                      <p class="text-truncate text-muted font-sm">
                        Zunira Willy & Nutty Nina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/4.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Say yes</p>
                      <p class="text-truncate text-muted font-sm">
                        Johnny Marro
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/5.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Where is your letter</p>
                      <p class="text-truncate text-muted font-sm">
                        Jina Moore & Lenisa Gory
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/6.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Hey not me</p>
                      <p class="text-truncate text-muted font-sm">
                        Rasomi Pelina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/7.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Deep inside</p>
                      <p class="text-truncate text-muted font-sm">
                        Pimila Holliwy
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->
              </div>
              <!-- End | Custom List -->
            </div>
            <div
              class="tab-pane fade"
              id="international"
              role="tabpanel"
              aria-labelledby="international-tab"
            >
              <!-- Begin | Custom List [[ Find at scss/framework/components/custom-list.scss ]] -->
              <div class="custom-list">
                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/1.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">I Love You Mummy</p>
                      <p class="text-truncate text-muted font-sm">
                        Arebica Luna
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/2.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Shack your butty</p>
                      <p class="text-truncate text-muted font-sm">
                        Gerrina Linda
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/3.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Do it your way(Female)</p>
                      <p class="text-truncate text-muted font-sm">
                        Zunira Willy & Nutty Nina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li>
                      <span class="badge badge-pill badge-warning"
                        ><i class="la la-star"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/4.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Say yes</p>
                      <p class="text-truncate text-muted font-sm">
                        Johnny Marro
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/5.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Where is your letter</p>
                      <p class="text-truncate text-muted font-sm">
                        Jina Moore & Lenisa Gory
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li>
                      <span class="badge badge-pill badge-danger"
                        ><i class="la la-heart"></i
                      ></span>
                    </li>
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/6.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Hey not me</p>
                      <p class="text-truncate text-muted font-sm">
                        Rasomi Pelina
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->

                <!-- Begin | Custom List Item -->
                <div class="custom-list--item">
                  <div class="text-dark custom-card--inline">
                    <div class="custom-card--inline-img">
                      <img
                        src="~/assets/images/cover/small/7.jpg"
                        alt=""
                        class="card-img--radius-sm"
                      />
                    </div>

                    <div class="custom-card--inline-desc">
                      <p class="text-truncate mb-0">Deep inside</p>
                      <p class="text-truncate text-muted font-sm">
                        Pimila Holliwy
                      </p>
                    </div>
                  </div>
                  <ul class="custom-card--labels d-flex ml-auto">
                    <li class="dropleft">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon-only p-0 w-auto h-auto"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="la la-ellipsis-h"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">
                          <a
                            href="javascript:void(0);"
                            class="dropdown-link favorite"
                          >
                            <i class="la la-heart-o"></i>
                            <span>Favorite</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-plus"></i>
                            <span>Add to Playlist</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-download"></i>
                            <span>Download</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="javascript:void(0);" class="dropdown-link">
                            <i class="la la-share-alt"></i>
                            <span>Share</span>
                          </a>
                        </li>
                        <li class="dropdown-item">
                          <a href="song-details.html" class="dropdown-link">
                            <i class="la la-info-circle"></i>
                            <span>Song Info</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!-- End | Custom List Item -->
              </div>
              <!-- End | Custom List -->
            </div>
          </div>
          <!-- End | Tab Content -->
        </div>
        <!-- End | Section -->
      </div>

      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle
          title="New Releases"
          pageLink="release"
          subTitle="Listen recently release music"
        />
        <Carousel :songs="songs" />
      </div>
      <!-- End | Section -->

      <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->
      <div class="section">
        <HeaderTitle
          title="Featured Artists"
          subTitle="Select you best to listen"
        />
        <Card :artists="artists" />
      </div>
      <!-- End | Section -->
    </div>
    <!-- End | Main Container -->
    <br /><br /><br />
    <!-- Begin | Audio Player [[ Find at scss/framework/base/audio-player/audio-player.scss ]] -->
    <div id="audioPlayer" class="player-primary">
      <!-- Begin | Audio Player Progress -->
      <div id="progress-container">
        <input type="range" class="amplitude-song-slider" />
        <progress
          class="audio-progress audio-progress--played amplitude-song-played-progress"
        ></progress>
        <progress
          class="audio-progress audio-progress--buffered amplitude-buffered-progress"
          value="0"
        ></progress>
      </div>
      <!-- End | Audio Player Progress -->

      <!-- Begin | Audio -->
      <div class="audio">
        <div class="song-image">
          <img
            data-amplitude-song-info="cover_art_url"
            src="~/assets/images/cover/small/1.jpg"
            alt=""
          />
        </div>
        <div class="song-info pl-3">
          <span
            class="song-name d-inline-block text-truncate"
            data-amplitude-song-info="name"
          ></span>
          <span
            class="song-artists d-block text-muted"
            data-amplitude-song-info="artist"
          ></span>
        </div>
      </div>
      <!-- End | Audio -->

      <!-- Begin | Audio Controls -->
      <div class="audio-controls">
        <div class="audio-controls--left d-flex mr-auto">
          <button class="btn btn-icon-only amplitude-repeat">
            <i class="ion-md-sync"></i>
          </button>
        </div>
        <div class="audio-controls--main d-flex">
          <button class="btn btn-icon-only amplitude-prev">
            <i class="ion-md-skip-backward"></i>
          </button>
          <button
            class="btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause"
          >
            <i class="ion-md-play"></i>
            <i class="ion-md-pause"></i>
          </button>
          <button class="btn btn-icon-only amplitude-next">
            <i class="ion-md-skip-forward"></i>
          </button>
        </div>
        <div class="audio-controls--right d-flex ml-auto">
          <button
            class="btn btn-icon-only amplitude-shuffle amplitude-shuffle-off"
          >
            <i class="ion-md-shuffle"></i>
          </button>
        </div>
      </div>
      <!-- End | Audio Controls -->

      <!-- Begin | Audio Info -->
      <div class="audio-info d-flex align-items-center pr-4">
        <span class="mr-4">
          <span class="amplitude-current-minutes"></span>:<span
            class="amplitude-current-seconds"
          ></span>
          / <span class="amplitude-duration-minutes"></span>:<span
            class="amplitude-duration-seconds"
          ></span>
        </span>
        <div class="audio-volume dropdown">
          <button
            class="btn btn-icon-only"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ion-md-volume-low"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right volume-dropdown-menu">
            <input type="range" class="amplitude-volume-slider" value="100" />
          </div>
        </div>

        <div class="dropleft">
          <button
            class="btn btn-icon-only"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="la la-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-heart-o"></i> <span>Favorite</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-plus"></i> <span>Add to Playlist</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-download"></i> <span>Download</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="javascript:void(0);" class="dropdown-link">
                <i class="la la-share-alt"></i> <span>Share</span>
              </a>
            </li>
            <li class="dropdown-item">
              <a href="song-details.html" class="dropdown-link">
                <i class="la la-info-circle"></i>
                <span>Song Info</span>
              </a>
            </li>
          </ul>
        </div>
        <button class="btn btn-icon-only" id="playList">
          <i class="ion-md-musical-note"></i>
        </button>
      </div>
      <!-- End | Audio Info -->
    </div>
    <!-- End | Audio Player -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          id: 1,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 2,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 3,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 4,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 5,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 6,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 7,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        },
        {
          id: 8,
          name: "Hey not me",
          artist: "Rasomi Pelina",
          album: "Find Soul",
          url: "~/assets/audio/ringtone-6.mp3",
          cover_art_url: "~/assets/images/cover/small/6.jpg"
        }
      ],
      artists: [
        {
          id: 1,
          name: "Kiss Daniel",
          slug: "jaman-jaman"
        },
        {
          id: 2,
          name: "Ice Price",
          slug: "jaman-jaman"
        },
        {
          id: 3,
          name: "Joe Boy",
          slug: "jaman-jaman"
        },
        {
          id: 4,
          name: "J Jamani",
          slug: "jaman-jaman"
        },
        {
          id: 5,
          name: "Fire Boy",
          slug: "jaman-jaman"
        },
        {
          id: 6,
          name: "2face Idibia",
          slug: "jaman-jaman"
        }
      ],
      string: ""
    };
  },
  methods: {
    hyphenSpace(string) {
      string = string.trim
        ? string.trim()
        : string.replace(/^\string+|\string+$/g, "");
      return string.split(/\string+/).join("-");
    }
  }
};
</script>
