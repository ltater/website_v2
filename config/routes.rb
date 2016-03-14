Rails.application.routes.draw do

  # Static Page Routes
  root 'static_pages#home'
  get 'about' => 'static_pages#about'

  # Live Features
  get 'live_features/nyt' => 'live_features#nyt'
  get 'live_features/notes' => 'live_features#notes'
  get 'live_features/tableau' => 'live_features#tableau'
  get 'live_features/spredfast' => 'live_features#spredfast'
  get 'nate' => 'static_pages#nate'

  # User Routes
  get 'signup' => 'users#new'
  resources :users

  # Login/Logout Routes
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  # Project Routes
  get 'projects' => 'projects#index'
  get 'projects/new' => 'projects#new'
  post 'projects' => 'projects#create'

  # Technology Routes
  get 'technologies' => 'technologies#index'
  get 'technologies/new' => 'technologies#new'
  post 'technologies' => 'technologies#create'

  # Just for Fun Routes
  get 'travel' => 'travels#new'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
