class Api::PinsController < ApplicationController
  def create
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    if @pin.save 
      render :show
    else 
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def index  
    @pins = Pin.all 
    render :index
  end

  def update 
    @pin = Pin.find(params[:id])

    if current_user.id == @pin.author_id && @pin.update(pin_params)
      redirect_to api_pins_url
    else
      render :edit
    end
  end

  def destory
    @pin = Pin.find(params[:id])
    if @pin.destory
      redirect_to api_pins_url
    else 
      render json: ['Cannot destroy pin']
    end
  end

  private 

  def pin_params
    params.require(:pin).permit(:title, :media, :category, :description, :author_id, :pinboard_id)
  end
end
