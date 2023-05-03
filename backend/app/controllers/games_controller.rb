class GamesController < ApplicationController
  def index
    @games = Game.all.order("created_at DESC")
    render json: @games
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def create
    @game = Game.new(playerx: params[:playerx], playero: params[:playero], winner: params[:winner])

    if @game.save
      render json: @game
    else
      render :new, status: :unprocessable_entity
    end
  end
end
