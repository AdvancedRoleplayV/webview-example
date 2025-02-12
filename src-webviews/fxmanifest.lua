fx_version "cerulean"

description "Advanced Roleplay Webviews"
author "Freeze"
version '1.0.0'
repository 'https://github.com/project-error/fivem-react-boilerplate-lua'

lua54 'yes'

games {
  "gta5"
}

ui_page 'index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
	'index.html',
	'assets/**/*',
}
