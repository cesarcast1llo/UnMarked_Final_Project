Rails.application.routes.draw do
  devise_for :users
 
  resources :articles do
  	resources :comments
  	member do
  		put "like" => "articles#like"
  	end
  end
 
  root 'welcome#index'
end