class SessionsController < ApplicationController
    skip_before_action :authorize
  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end

    def get_cart
      # byebug
      session[:cart] ||= {}
      render json: session[:cart]
    end

    def add_to_cart
      # byebug
      params[:id]= params[:id]-1
      if (session[:cart][params[:id].to_s]==nil)
        session[:cart][params[:id].to_s]=1
      else 
        session[:cart][params[:id].to_s]+=1
      end
      render json: session[:cart]
    end

    def remove_from_cart
      # byebug
      params[:id]= params[:id]-1
      if (session[:cart][params[:id].to_s]>1)
        session[:cart][params[:id].to_s]-=1
      elsif (session[:cart][params[:id].to_s]==1)
        session[:cart].delete(params[:id].to_s)
      end
      render json: session[:cart]
    end

    def delete_cart
      # byebug
      session.delete :cart
      head :no_content
    end
  
  end
  