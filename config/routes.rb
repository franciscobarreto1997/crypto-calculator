Rails.application.routes.draw do
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
  get 'fetch_my_currencies', to: 'currencies#fetch_my_currencies'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
