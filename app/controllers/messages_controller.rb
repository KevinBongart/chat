class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.create!(message_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to messages_path }
        format.json { render :show, status: :created, location: @message }
      else
        format.html { render :new }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end

  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
