import {request} from "./request";

export function getDetails(iid){
  return request({
    url:'detail/',
    params:{
      iid:iid
    }
  })
}


export class GoodsDetails {
  constructor(itemInfo, columns, services ) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.realPrice=itemInfo.lowNowPrice
    this.columns=columns
    this.services=services
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}

export class ItemParams {
  constructor(itemParams) {
    this.desc=itemParams.rule ? itemParams.rule.desc : ''
    this.disclaimer=itemParams.rule ? itemParams.rule.disclaimer : ''
    this.rulesParams=itemParams.rule ? itemParams.rule.tables : []
    this.infoParams= itemParams.rule ? itemParams.info.set : []
  }
}

export function getRecommend(){
  return request({
    url:'/recommend',
  })
}
