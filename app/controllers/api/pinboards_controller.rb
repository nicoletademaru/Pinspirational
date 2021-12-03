class Api::PinboardsController < ApplicationController
  def create 
    @pinboard = Pinboard.new(pinboard_params)
    @pinboard.user_id = current_user.id

    if @pinboard.save 
      render :show
    else
      render json: @pinboard.errors.full_messages, status:422
    end
  end

  def index
    @pinboards = Pinboard.all
    render :index
  end


  def destroy 
    @pinboard = Pinboard.find(params[:id])
    if @pinboard.destroy
      @pinboards = Pin.all
      render :index
    else 
      render json: ['Cannot destroy pin']
    end
  end
  private 

  def pinboard_params
    params.requre(:pinboard).permit(:title, :user_id)
  end

end
