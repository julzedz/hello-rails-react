Rails.application.routes.draw do
  get 'greetings/random', to: 'greetings#random'
  root 'root#index'
end
