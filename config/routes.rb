Rails.application.routes.draw do
  root to: redirect('/courses')

  get 'courses', to: 'site#index'
  get 'courses/new', to: 'site#index'
  get 'courses/:id', to: 'site#index'
  get 'courses/:id/edit', to: 'site#index'

  namespace :api do
    resources :courses, only: %i[index show create destroy update]
  end
end

