const deploy = require('@bentrynning/deploy-me')

const config = {
  host: '198.211.127.55',
  username: 'root',
} 

const paths = {
  local: 'public/',
  remote: '/var/www/me'
}

deploy(config, paths);