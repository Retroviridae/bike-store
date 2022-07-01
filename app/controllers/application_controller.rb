class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize, skip: :create
  # skip_before_action :authorize, only: [:create]

  def create
    
    User.destroy_all
    Bike.destroy_all
    puts "Seeding"
    puts "Creating users"
    
    u1 = User.create(username:"Updog", password:"1234")
    u2 = User.create(username:"KateSkate", password:"1234")
    u3 = User.create(username:"PapaBear", password:"1234")
    u4 = User.create(username:"ConManSam", password:"1234")
    u5 = User.create(username:"BenKenobi", password:"1234")
    
    bikes = [
        {                                                                              
        model: "Capra CORE 2 MX",                                 
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-core-2-mx/thumbs/400/85429.jpeg",
        maker: "YT Industries",                                                                        
        url: "https://99spokes.com/bikes/yt/2022/capra-core-2-mx",
        price: 5900,                                              
        },
       {                                                                              
        model: "Tues Pro 27",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/tues-pro-27/thumbs/400/095d6.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/tues-pro-27",
        price: 1300,
        },{
       model: "Dirt Love 26",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/dirt-love-26/thumbs/400/3dcde.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/dirt-love-26",
        price: 2700,
        },{
       model: "Capra CORE 2 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-core-2-29/thumbs/400/8c6a9.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/capra-core-2-29",
        price: 7000,
        },{
       model: "Tues Pro Race 27",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/tues-pro-race-27/thumbs/400/88c5e.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/tues-pro-race-27",
        price: 8800,
        },{
       model: "Jeffsy CORE 2 27",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/jeffsy-core-2-27/thumbs/400/9cbe5.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/jeffsy-core-2-27",
        price: 3900,
        },{
       model: "Jeffsy Uncaged 8 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/jeffsy-uncaged-8-29/thumbs/400/a55bf.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/jeffsy-uncaged-8-29",
        price: 9800,
        },{
       model: "Decoy Uncaged 9 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-uncaged-9-mx/thumbs/400/07f3b.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-uncaged-9-mx",
        price: 5400,
        },{
       model: "Capra CORE 3 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-core-3-mx/thumbs/400/355d3.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/capra-core-3-mx",
        price: 7500,
        },{
        model: "Capra CORE 4 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-core-4-mx/thumbs/400/ced30.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/capra-core-4-mx",
        price: 6700,
        },{
        model: "Capra Uncaged 9 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-uncaged-9-mx/thumbs/400/7d4d6.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/capra-uncaged-9-mx",
        price: 4700,
        },{
        model: "Izzo UNCAGED 7 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/izzo-uncaged-7-29/thumbs/400/069f9.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/izzo-uncaged-7-29",
        price: 800,
        },{
        model: "Jeffsy Blaze 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/jeffsy-blaze-29/thumbs/400/e3a88.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/jeffsy-blaze-29",
        price: 3500,
        },{
        model: "Tues Pro 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/tues-pro-29/thumbs/400/88a12.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/tues-pro-29",
        price: 4900,
        },{
        model: "Decoy Shred MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-shred-mx/thumbs/400/fb727.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-shred-mx",
        price: 600,
        },{
        model: "Decoy Elite MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-elite-mx/thumbs/400/037f1.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-elite-mx",
        price: 4700,
        },{
        model: "Decoy CORE 4 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-core-4-mx/thumbs/400/09ef5.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-core-4-mx",
        price: 3900,
        },{
        model: "Decoy CORE 3 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-core-3-mx/thumbs/400/b70b8.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-core-3-mx",
        price: 9300,
        },{
        model: "Decoy CORE 2 MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-core-2-mx/thumbs/400/75be3.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-core-2-mx",
        price: 1600,
        },{
        model: "Decoy CORE 3 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/decoy-core-3-29/thumbs/400/c27c7.jpeg",
        maker: "YT Industries",
        url: "https://99spokes.com/bikes/yt/2022/decoy-core-3-29",
        price: 4100,
        },{
        model: "CHAMELEON R / AL / MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-al-mx/thumbs/400/d4490.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-al-mx",
        price: 800,
        },{
        model: "CHAMELEON S / AL / MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-s-al-mx/thumbs/400/2d985.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-s-al-mx",
        price: 2600,
        },{
        model: "CHAMELEON R / AL / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-al-29/thumbs/400/607df.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-al-29",
        price: 8800,
        },{
        model: "CHAMELEON S / AL / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-s-al-29/thumbs/400/e0309.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-s-al-29",
        price: 6900,
        },{
        model: "CHAMELEON D / AL / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-d-al-29/thumbs/400/90368.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-d-al-29",
        price: 3600,
        },{
        model: "CHAMELEON D / AL / MX",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-d-al-mx/thumbs/400/53d86.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-d-al-mx",
        price: 2700,
        },{
        model: "HIGHBALL X01 AXS / RSV / Carbon CC / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/highball-x01-axs-rsv-carbon-cc-29/thumbs/400/57ee2.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/highball-x01-axs-rsv-carbon-cc-29",
        price: 8100,
        },{
        model: "Highball X01 AXS / RSV / Carbon C / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/highball-x01-axs-rsv-carbon-c-29/thumbs/400/57ee2.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/highball-x01-axs-rsv-carbon-c-29",
        price: 6700,
        },{
        model: "MEGATOWER X01 / Air / Carbon CC / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/megatower-x01-air-carbon-cc-29/thumbs/400/14a19.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/megatower-x01-air-carbon-cc-29",
        price: 300,
        },{
        model: "MEGATOWER X01 AXS/ Coil / RSV / Carbon CC / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/megatower-x01-axs-coil-rsv-carbon-cc-29/thumbs/400/b914a.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/megatower-x01-axs-coil-rsv-carbon-cc-29",
        price: 0,
        },{
        model: "MEGATOWER X01 AXS / RSV / Carbon CC / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/megatower-x01-axs-rsv-carbon-cc-29/thumbs/400/16942.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/megatower-x01-axs-rsv-carbon-cc-29",
        price: 6300,
        },{
        model: "MEGATOWER X01 / Coil / Carbon CC / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/megatower-x01-coil-carbon-cc-29/thumbs/400/c660e.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/megatower-x01-coil-carbon-cc-29",
        price: 100,
        },{
        model: "Chameleon R / Carbon C / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-carbon-c-29/thumbs/400/3d340.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-carbon-c-29",
        price: 1100,
        },{
        model: "Chameleon R Plus / Aluminum / 27+",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-plus-aluminum-27plus/thumbs/400/8c145.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-plus-aluminum-27plus",
        price: 7200,
        },{
        model: "Chameleon D Plus / Aluminum / 27+",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-d-plus-aluminum-27plus/thumbs/400/76cdd.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-d-plus-aluminum-27plus",
        price: 1400,
        },{
        model: "Chameleon D / Aluminum / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-d-aluminum-29/thumbs/400/4f08d.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-d-aluminum-29",
        price: 6200,
        },{
        model: "NOMAD X01 / Coil / AXS / RSV / Carbon CC / 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/nomad-x01-coil-axs-rsv-carbon-cc-27.5/thumbs/400/da99e.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/nomad-x01-coil-axs-rsv-carbon-cc-27.5",
        price: 2200,
        },{
        model: "Rockhopper Sport 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-sport-29/thumbs/400/93210.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-sport-29",
        price: 9100,
        },{
        model: "Rockhopper 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-27.5/thumbs/400/bfe07.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-27.5",
        price: 4200,
        },{
        model: "Rockhopper Comp 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-comp-27.5/thumbs/400/7e601.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-comp-27.5",
        price: 2300,
        },{
        model: "Status 160",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/status-160/thumbs/400/4a296.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/status-160",
        price: 5400,
        },{
        model: "Chameleon R Plus / Carbon C / 27+",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-plus-carbon-c-27plus/thumbs/400/b6076.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-plus-carbon-c-27plus",
        price: 600,
        },{
        model: "Chameleon R / Aluminum / 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/chameleon-r-aluminum-29/thumbs/400/e0bd7.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/chameleon-r-aluminum-29",
        price: 8800,
        },{
        model: "NOMAD X01 / Air / AXS / RSV / Carbon CC / 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/santacruz/2022/nomad-x01-air-axs-rsv-carbon-cc-27.5/thumbs/400/6edb9.jpeg",
        maker: "Santa Cruz",
        url: "https://99spokes.com/bikes/santacruz/2022/nomad-x01-air-axs-rsv-carbon-cc-27.5",
        price: 7200,
        },{
        model: "Enduro LTD",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/enduro-ltd/thumbs/400/55d39.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/enduro-ltd",
        price: 3400,
        },{
        model: "Rockhopper 26",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-26/thumbs/400/bfe07.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-26",
        price: 2700,
        },{
        model: "Rockhopper Sport 26",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-sport-26/thumbs/400/3fb6e.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-sport-26",
        price: 2900,
        },{
        model: "Status 140",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/status-140/thumbs/400/20887.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/status-140",
        price: 5700,
        },{
        model: "Rockhopper 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-29/thumbs/400/bfe07.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-29",
        price: 4000,
        },{
        model: "Turbo Levo Comp Alloy",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/turbo-levo-comp-alloy/thumbs/400/05e9b.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/turbo-levo-comp-alloy",
        price: 1200,
        },{
        model: "Demo Race",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/demo-race/thumbs/400/eaf19.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/demo-race",
        price: 1000,
        },{
        model: "Rockhopper Elite 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-elite-27.5/thumbs/400/0b398.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-elite-27.5",
        price: 4600,
        },{
        model: "Rockhopper Sport 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-sport-27.5/thumbs/400/93210.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-sport-27.5",
        price: 1900,
        },{
        model: "Rockhopper Expert 27.5",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-expert-27.5/thumbs/400/58e2d.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-expert-27.5",
        price: 4000,
        },{
        model: "Epic Hardtail",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/epic-hardtail/thumbs/400/39ef4.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/epic-hardtail",
        price: 5000,
        },{
        model: "Rockhopper Expert 29",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-expert-29/thumbs/400/58e2d.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-expert-29",
        price: 5900,
        },{
        model: "Turbo Levo Alloy",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/turbo-levo-alloy/thumbs/400/aac8f.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/turbo-levo-alloy",
        price: 8900,
        },{
        model: "Turbo Levo Comp",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/turbo-levo-comp/thumbs/400/556aa.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/turbo-levo-comp",
        price: 7500,
        },{
        model: "Rockhopper Sport",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-sport/thumbs/400/967ea.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-sport",
        price: 9700,
        },{
        model: "Rockhopper Comp",
        img: "https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2022/rockhopper-comp/thumbs/400/3952e.jpeg",
        maker: "Specialized",
        url: "https://99spokes.com/bikes/specialized/2022/rockhopper-comp",
        price: 3500,
        }] 
    
    
    
    puts "Creating bikes"
    
    bikes.each{|bike| Bike.create(model:bike[:model],img:bike[:img],url:bike[:url],price:bike[:price],maker:bike[:maker])}
    
    puts "Done"

  end

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
