Rails.application.config.middleware.use OmniAuth::Builder do
	provider :facebook, ENV['828450210587169'], ENV['acf0afdcbe21408508a97044a8c2e2a4'], scope: 'public_profile', info_fields: 'id,name,link', display: 'popup'
end