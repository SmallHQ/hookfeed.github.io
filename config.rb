require 'builder'

Time.zone = "Pacific Time (US & Canada)"

###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

###
# Helpers
###
activate :blog do |blog|
  blog.name = "blog"
  blog.permalink = ":title.html"
  blog.layout = "blog"
  blog.prefix = "blog"
end

activate :blog do |blog|
  blog.name = "updates"
  blog.permalink = ":title.html"
  blog.layout = "layout"
  blog.prefix = "updates"
  blog.publish_future_dated = true
end




activate :livereload
activate :directory_indexes
activate :syntax

activate :deploy do |deploy|
  deploy.build_before = true

  deploy.method = :git
  deploy.remote = "github"
  deploy.branch = "gh-pages"
end

set :css_dir, 'assets/scss'
set :js_dir, 'assets/js'

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true

page "/feed.xml", layout: false
page "/sitemap.xml", layout: false
page "/robots.txt", layout: false

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end