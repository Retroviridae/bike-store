Rails.application.routes.draw do
  resources :orders
  resources :bikes
  resources :users

  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/reset", to: "application#create"
  get "/cart", to: "sessions#get_cart"
  patch "/add", to: "sessions#add_to_cart"
  patch "/remove", to: "sessions#remove_from_cart"
  delete "/cart", to: "sessions#delete_cart"
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
