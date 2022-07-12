Rails.application.routes.draw do
  resources :orders, only: [:index, :create, :destroy]
  resources :bikes, only: [:index, :create]
  resources :users, only: [:show, :create]

  
  get "/me", to: "users#show"
  get "/reset", to: "application#create"
  get "/cart", to: "sessions#get_cart"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  patch "/add", to: "sessions#add_to_cart"
  patch "/remove", to: "sessions#remove_from_cart"
  delete "/logout", to: "sessions#destroy"
  delete "/cart", to: "sessions#delete_cart"
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
