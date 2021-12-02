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
      @pins = Pin.all
      render :index
    else
      render :edit
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      @pins = Pin.all
      render :index
    else 
      render json: ['Cannot destroy pin']
    end
  end

  private 

  def pin_params
    params.require(:pin).permit(:title, :description, :author_id, :pinboard_id, :photo)
  end
end
