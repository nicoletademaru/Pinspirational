class PinsController < ApplicationController
  def create
    @pin = Pin.new(pin_params)
    
    if @pin.save 
      render :show
    else 
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index  
    @pins = Pin.all 
    render :index
  end

  def update 
    @pin = Pin.find(params[:id])

    if current_user.id == @pin.author_id && @pin.update(pin_params)
      redirect_to user_path(current_user.id)
    else
      render :edit
    end
  end

  def destory
    @pin = Pin.find(params[:id])
  end

  private 

  def pin_params
    params.require(:pin).permit(:title, :media, :category, :description)
  end
end
