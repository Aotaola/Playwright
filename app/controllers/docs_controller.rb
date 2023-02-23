class DocsController < ApplicationController

    def index
        docs = Doc.all
        render json: docs, status: :ok
    end

    def show
        doc = Doc.find(params[:id])
        render json: doc, status: :ok
    end

    def create
        new_doc = Doc.create!(doc_params)
        render json: new_doc, status: :created
    end
    def destroy
        user = User.find(params[:user_id])
        user.destroy
    end
    private
    def doc_params
        params.permit(:title, :Author, :wordcount, :info, :text, :image_url)
    end
end
