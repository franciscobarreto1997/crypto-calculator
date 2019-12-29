class CurrenciesController < ApplicationController

  def index
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: { currencies: @currencies }
  end

  def calculate
    my_currency = MyCurrency.create!(name: currency.name,
                                     max_supply: currency.max_supply,
                                     currency_symbol: currency.currency_symbol,
                                     slug: currency.slug,
                                     amount: params[:amount])
    currency_to_add = {}
    currency_to_add[currency.name] = {
      currency: currency,
      current_price: currency.current_price,
      amount: params[:amount],
      value: currency.calculate_value(params[:amount])
    }
    render json: currency_to_add
  end

  def fetch_my_currencies
    @my_currencies = MyCurrency.all
    currencies_list = {}
    unless @my_currencies.empty?
      @my_currencies.each do |my_currency|
        currencies_list[my_currency.name] = {
            currency: my_currency,
            current_price: my_currency.current_price,
            amount: my_currency.amount,
            value: my_currency.calculate_value(my_currency.amount)
          }
      end
    end
    render :json => currencies_list
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
