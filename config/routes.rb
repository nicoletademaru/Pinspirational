Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]

    resources :users, only: [:show] do 
      resources :pinboards, only: [:index]
    end

    resources :pins, only: [:create, :show, :index, :update, :destroy]
    resources :pinboards, only: [:create, :destroy]
    resources :pinboards, only: [:show] do
      resources :pinnings, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
    resources :pinnings, only: [:create, :show, :destroy]
  end
  
  root to: 'static_pages#root'

end  
