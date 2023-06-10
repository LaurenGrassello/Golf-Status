class Api::CardsController < ApplicationController
    before_action :set_card, only: %i[show update destroy]


  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    render json: @card
  end

  def create
    @card = Card.new(card_params)

    if @card.save
      render json: @card, status: :created
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def update
    if @card.update(card_params)
      render json: @card, status: :ok
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @card.destroy
  end

  private

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(
      :id,
      :score,
      :created_at,
      :updated_at
    )
  end
end