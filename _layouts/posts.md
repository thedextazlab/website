<!DOCTYPE html>
<html>
  {% include head.html %}
    <body id="page-top" class="index">
    {% include preloader.html %}
    {% include tags.html %}
    {% include pages_header.html %}
    <!-- Page Content -->
    <section id="page" style="background-color:#eeeeee;">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    {{ content }}
                </div>
            </div>
        </div>
    </section>
    {% include footer.html %}
    {% include js.html %}
    </body>
</html>