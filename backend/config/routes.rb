Rails.application.routes.draw do
  # game
  get "/games", to: "games#index"
  get "/games/:id", to: "games#show"
  post "/games/create", to: "games#create"
end
