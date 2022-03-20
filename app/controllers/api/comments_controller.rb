class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save 
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end
  end

    def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      @comments = Comment.all
      render :index
    else
      render json: ['Cannot destroy comment']
    end
  end

  private 

  def comments_params
    params.require(:comment).permit(:id, :content, :commenter_id, :pin_id)
  end

end
