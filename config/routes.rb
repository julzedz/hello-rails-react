Rails.application.routes.draw do
  get 'greetings/random'
  root 'root#index'
end
