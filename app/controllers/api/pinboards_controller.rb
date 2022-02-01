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
    if params.has_key?(:user_id)
      @pinboards = Pinboard.where(user_id: params[:user_id])
      @user = User.find(params[:user_id])

      render "api/users/show"
    end
  end

  def show 
    @pinboard = Pinboard.find(params[:id])
    render :show
  end

  def update 
    @pinboard = Pinboard.find(params[:id])
    if current_user.id == @pinboard.user_id && @pinboard.update(pinboard_params)
      render :show
    else
      render :edit
    end
  end

  def destroy 
    @pinboard = Pinboard.find(params[:id])
    if @pinboard.destroy
      @pinboards = Pin.all

      render "api/users/show"
    else 
      render json: ['Cannot delete pinboard']
    end
  end
  private 

  def pinboard_params
    params.require(:pinboard).permit(:id, :title, :user_id)
  end

end
