#after_configuration do
#  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
# sprockets.append_path File.join "#{root}", @bower_config["directory"]
#end

activate :livereload

activate :directory_indexes

set :css_dir, 'styles'
set :js_dir, 'scripts'
set :images_dir, 'images'
set :partials_dir, 'partials'

configure :build do
	activate :minify_css
	activate :minify_javascript
	activate :asset_hash
end

page '/index.html', :layout => false