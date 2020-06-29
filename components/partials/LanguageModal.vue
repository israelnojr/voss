<template>
  <!-- Begin | Language Modal -->
  <div
    class="modal fade"
    id="lang"
    tabindex="-1"
    role="dialog"
    aria-labelledby="langTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h5 class="modal-title mb-1" id="langTitle">Language</h5>
            <p class="text-muted">
              Please select the language(s) of the music you listen to.
            </p>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-group row">
            <li class="list-group-item border-0 col-sm-6">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="ch1"
                  checked
                />
                <label class="custom-control-label" for="ch1">English</label>
              </div>
            </li>
            <li class="list-group-item border-0 col-sm-6">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="ch16" />
                <label class="custom-control-label" for="ch16">Russia</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer text-center d-block">
          <button type="button" class="btn btn-primary btn-pill" id="langApply">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End | Language Modal -->
</template>

<script>
export default {};
</script>

<style></style>
