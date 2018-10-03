import { Component, Renderer, group, ElementRef, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxCarousel } from 'ngx-carousel';
import { DataManagerService } from '../../../services/data-manager.service'
import { AppComponent } from '../../../app.component';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { forEach } from '@angular/router/src/utils/collection';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { Text } from '@angular/compiler';
import { Ng2SliderComponent } from 'ng2-slider-component';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {Clipboard} from 'ts-clipboard';
require('aws-sdk/dist/aws-sdk');
"use strict";
// import entire SDK
// import AWS = require('aws-sdk');
// import AWS object without services
// import AWS = require('aws-sdk/global');
// import individual service
//import S3 = require('aws-sdk/clients/s3');
@Component({
  selector: 'ngbd-rating',
  templateUrl: './rating.component.html',
	styleUrls: ['./botflow.css']
})

export class NgbdratingBasic {
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.block.cards.forEach(card => {
        this.closeAllPop(card)
      });
    }
  }
  mouseover(x) {
    x.hover = true;
    console.log(x)
  }
  isCollapsed: boolean = true;
  func1(x) {
    console.log('func1:',x);
    return 1;
  }
  func2() {
    console.log('func2');
    return 1;
  }
  // List of variables
  groups = <any>[];
  blocks = <any>[];
  cards = <any>[];
  group = <any>[];
  block = <any>[];
  first_block = <any>[];
  first_group = <any>[];
  blockIds: any[];
  selectedCard = <any>[];
  selectedButton = <any>{};
  newButton = <any>{};
  newBtn = <any>{};
  filteredList = <any>{};
  text: string;
  public query = '';
  blockId: string;
  botId: string;
  selectedBlock = <any>[];
  lastOneIsURL: boolean;
  z: string;
  y: string;
  groupName: string;
  blockName: string;
  ta_popup = false;
  tu_popup = false;
  contentShow = false;
  array = [1, 2, 3];
  big_array = [1, 2];
  blockPopup = false;
  groupPop = false;
  blkshw = false;
  group_name = '';
  block_name = '';
  image_url = '';
  blockArray = <any>[];
  casio: number;
  broadcastGroup_id :string;
  bot = <any>[];
  addGroup = "+ Add Group";
  clientId;
  blockLink;
  promos = <any>[];
  filteredPromos = <any>[];
spliceEnd(x,y){
  y = x;
  if(x.length>60)
  y = x.slice(0,60);
  return y;
}
uploadImage(fileInput: any,card,g){
  console.log('uploading image')
  let file = fileInput.target.files[0]
  console.log(fileInput.target.files.length)
  if(fileInput.target.files.length > 0)
  {if(card.plugin_id == 'image')
  card.load = true;
  if(card.plugin_id == 'gallery')
  card.config.gallery_cards[g].load = true;
  if(card.plugin_id == 'list')
  card.config.list_cards[g].load = true;
  let url = ''
 var card = this.awsCall(file,card,g);
 
// repeat with the interval of 2 seconds
let timerId = setInterval(()=>{
  if(card.plugin_id == 'image')
  url = card.config.image_url
  if(card.plugin_id == 'gallery')
  url = card.config.gallery_cards[g].image_url;
  if(card.plugin_id == 'list')
  url = card.config.list_cards[g].image_url;
    console.log('url:',url)
    if(url.length>0)
    {
      console.log('updating')
      this.updateCard(card)
      if(card.plugin_id == 'image')
      card.load = false;
      if(card.plugin_id == 'gallery')
      card.config.gallery_cards[g].load = false;
      if(card.plugin_id == 'list')
      card.config.list_cards[g].load = false;
      clearInterval(timerId)
    }
},2000)

// after 5 seconds stop
 setTimeout(() => { clearInterval(timerId);console.log('Image uploading ended'); }, 15000);
}}
loop(response){
  if(response.length == 0)
  this.loop(response)
  else
  console.log('done')
}
  awsCall(file, card, g) {
    //  debugger;
    var response = <any>[];
    let AWSService = (<any>window).AWS;
    console.log(AWSService);
    AWSService.config.accessKeyId = 'AKIAJPRD72DN6HC72MUQ';
    AWSService.config.secretAccessKey = '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';
    AWSService.config.region = 'us-east-2';
    let bucket = new AWSService.S3({ params: { Bucket: 'dev-seller-bot', ContentType: 'image/jpeg' } });
    let params = { Key: file.name, Body: file };
    bucket.upload(params, function (error, res, next) {
      console.log('error', error);
      console.log('response obtained', res);
      response = res;
      if (card.plugin_id == 'image')
        card.config.image_url = res.Location;
      else if (card.plugin_id == 'gallery')
        card.config.gallery_cards[g].image_url = res.Location;
        else if (card.plugin_id == 'list')
        card.config.list_cards[g].image_url = res.Location;
      console.log('card after aws call', card)
    })
    console.log('returning response',card)
return card;    //this.casio =2;


//     for(var i=1;i>0;i++){
//       // console.log('x')
// if(response.length >0)
// break;
//     }
  //  if (response!=[])
  //   return this.casio = 2;
  }
  asdf(card){
    this.updateCard(card);
  }
  
  // lol(card){
  //   console.log('\n\nlol\n\n')
  //   this.updateCard(card);
  // }
  trial(e, card) {
    //	var reader:FileReader = new FileReaderf();
    //	reader.onloadend = function(e){
    //		 console.log(reader.result.split("\n"));
    //	}
    var obj = {
      'file': file,
      'name': '',
      'lastmodified': '',
      'size': 0,
      'type': ''
    }
    var file = e.target.files[0];
    console.log(file);
    var file2 = this.elem.nativeElement.querySelector('#imageFile');
    console.log('file2', file[0])
    let fd = new FormData();
    console.log('new form', fd)
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    console.log('xhr: ', xhr);
    fd.append('pic', file);
    fd.append('name', file.name);
    fd.append('lastmodified', file.lastmodified);
    fd.append('size', file.size);
    fd.append('type', file.type);
    obj.file = file;
    obj.lastmodified = file.lastmodified
    obj.name = file.name
    obj.size = file.size
    obj.type = file.type
    fd.append('name', 'asdf', 'zxcv')
    console.log('fd', obj, 'file', file)
    console.log(fd)
    this.service.uploadImage(obj, card).subscribe(response => {
      console.log('response is', response)
    });
    //  $http.post(BASE_URL + uploadUrl, fd, { transformRequest: angular.identity, headers: { 'Content-Type': undefined } })
    //    .then(_success, _error)

  }
  function(i, j) {
    console.log('asdf', i, j)
    $("#j").toggle();
  }
  addButtonPopup(x, card) {
    console.log("pop");
    x = !x;
    console.log(this.ta_popup, this.tu_popup)
  }

  /*  Fucntions to close the opened popups 
  while creating blocks, groups, and buttons 
  for text, gallery, list and quickreply cards  */
  private active: boolean = false;
  //console.log('clicked out');
  onClickedOut(group) {
    group.active = false;
    group.conflict= false;
  }

  //console.log('clicked out of group button');
  onclickout() {
    this.groupPop = false;
  }

  //To close all the card popups manually
  closeAllPop(card) {
    if(card.plugin_id == 'promo'){
      card.active = false;
      card.config.buttons.forEach(button => {
        button.active = false;
      });
    }
    if (card.plugin_id == 'text') {
      card.active = false;
      card.load = false;
      card.config.buttons.forEach(button => {
        button.active = false;
      });
    }
    if (card.plugin_id == 'gallery') {
      card.config.gallery_cards.forEach(gallery_card => {
        gallery_card.active = false;
        gallery_card.load = false;
        gallery_card.buttons.forEach(button => {
          button.active = false;
        });
      });
    }
    if (card.plugin_id == 'list') {
      card.active = false;
      card.config.buttons.forEach(button => {
        button.active = false;
      });
      card.config.list_cards.forEach(list_card => {
        list_card.active = false;
        list_card.buttons.forEach(button => {
          button.active = false;
        });
      });
    }
    if (card.plugin_id == 'quick_reply') {
      card.config.buttons.forEach(button => {
        button.active = false;
      });
    }
    this.groupPop = false;
    this.groups.forEach(group => {
      group.active = false;
      group.conflict = false;
    });
    this.filteredList = [];
  }
  //To close all the card popups when clicked outside them
  onClickedOutside(card) {
    if (card.plugin_id == 'text') {
      console.log('Clicked out of text button')
      card.active = false;
      card.config.buttons.forEach(button => {
        button.active = false;
      });
    }
    if (card.plugin_id == 'image') {
      card.active = false
    }
    if (card.plugin_id == 'gallery') {
      card.config.gallery_cards.forEach(gallery_card => {
        gallery_card.active = false;
        gallery_card.buttons.forEach(button => {
          button.active = false;
        });
      });
    }
    if (card.plugin_id == 'list') {
      card.active = false;
      card.config.buttons.forEach(button => {
        button.active = false;
      });
      card.config.list_cards.forEach(list_card => {
        list_card.active = false;
        list_card.buttons.forEach(button => {
          button.active = false;
        });
      });
    }
    if (card.plugin_id == 'quick_reply') {
      card.config.buttons.forEach(button => {
        button.active = false;
      });
    }
    //this.filteredList = [];
  }
  /*To get the block data when selected
  using block id and populating the data
  parameter: block ID*/
  displayBlock(block_id) {
    this.blockLink = 'https://m.me/'+this.bot.pageID+'?ref='+block_id;
    this.y = block_id;
    console.log("gettting block data");
    this.service.getBlockByBlockId(block_id)//API to obtain block data
      .subscribe(response => {
        this.selectedBlock = response.json();
        this.block = this.selectedBlock[0];
      });
    //this.blockId = block_id;
    console.log(this.block); 
    console.log('sub',this.sub)
    this.sub = this.route.params.subscribe(params => {
      console.log(this.route)
      this.botId = params['botId'];
      this.clientId = params['id'];
      console.log(params)
    });
    this._router.navigate(['/builder' , this.clientId, this.botId,block_id]);
  }

  /*To check which data is entered last
  Block or URL while adding button
  parameter: block ID*/
  lastOne(x) {
    if (x) {
      this.lastOneIsURL = false;
    } else {
      this.lastOneIsURL = true;
    } console.log("setting", this.lastOneIsURL);
    return 1;
  }

  /*Adding new button to the card
  parameter: card to which button is to be added*/
  addNewButton(card) {
    console.log("last one", this.lastOneIsURL);
    console.log(card);
    console.log(this.query);
    console.log(this.newButton);
    if ((this.newButton.title.length > 0) && (this.query!='' || this.newButton.url !='')) {
      if (this.query == '') {
        console.log('query empty')
        this.newBtn =
          { url: this.newButton.url, title: this.newButton.title }

        card.config.buttons.push(this.newBtn);
        console.log(this.newBtn);
      } else {
        let btnData = {
          title: this.newButton.title,
          block_id: this.newButton.block_id
        }
        card.config.buttons.push(btnData);
        console.log(this.newButton);
      }
      this.updateCard(card);
      console.log("pushed button");
    }
    console.log(card.config.list_cards);
    console.log(card);
    this.query = '';
  }
  /*Assign block of button to popup when clicked on it to edit
  parameter: btn clicked to edit */
  assignButtonContent(btn) {
    this.selectedButton = btn;
    console.log("assignButtonContent",this.selectedButton)
    if (this.selectedButton.block_id) {
      this.query = this.blockArray.find(x => x.id == this.selectedButton.block_id).title
    } else {
      this.query = "";
    }
  }



  triggerFile(fileInput: HTMLInputElement) {
    // do something
    fileInput.click();
  }

  /* Save the group on work 
  parameter: group selected*/
  groupSet(a) {
    this.z = a._id;
    this.group = a;
    return 1;
  }

  /*Save the block on work 
  parameter: block selected*/
  blockSet(a) {
    this.block = a;
    return 1;

  }
  deleteImage(card, i) {
    if (card.plugin_id == 'image') {
      console.log('card', card)
      card.config.image_url = '';
      this.updateCard(card);
    }
    if (card.plugin_id == 'gallery') {
      console.log('card', card)
      card.config.gallery_cards[i].image_url = '';
      this.updateCard(card);
    }
  }

  /*Create blocks
  parameter: name of new block
  API hit to save new block */
  addNewBlock(blockName, group_id,group) {
    let repeat = false;
    this.blocks.forEach(block => {
      if(block.title == blockName)
repeat = true;
    });
    
    if(!repeat){
    let post = {
      bot: this.botId,
      title: blockName,
      parent_group: group_id
    }
    console.log("new block", post, "group_id" + group_id, "blockName", blockName)
    if (blockName.length > 0) {
      group.conflict = false;
      group.active = false;
      this.blocks.push(post);
      this.service.addBlock(post)
        .subscribe(response => {
          console.log("response", response);
          post = JSON.parse(response['_body']);
          console.log(post);
          //this.blocks.push(post);
          this.blocks[this.blocks.length - 1] = post;
          this.storeBlockArray();
          this.filter();
        });
    }
  }else{
    group.conflict = true;
  }}

  /*update block name by block id
  parameter: block with changed title
  API hit to save block with new name*/
  updateBlockName(block,blockName) {
    let repeat = false;
    this.blocks.forEach(block => {
      if(block.title == blockName)
repeat = true;
    });
    if(!repeat || block.title == blockName){
      block.conflict = false;
    let z = {
      title: blockName
    }
    this.blocks.forEach(element => {
      if(element._id == block._id)
      element.title = blockName;
    });
    console.log(z);
    console.log(block._id);
    this.service.updateBlockNameByBlockId(block._id, z)
      .subscribe(response => {
        console.log("block name updated");
        console.log(block.title);
      });
  }else{
    block.conflict = true;
  }}

  /*update group name by group id
parameter: group with changed title
API hit to save group with new name*/
  updateGroupName(group) {
    let z = {
      title: group.title
    }
    console.log(z);
    console.log(group._id);
    this.service.updateGroupNameByGroupId(group._id, z)
      .subscribe(response => {
        console.log("group name updated");
        console.log(group.title);
      });
  }

  /*Add new group
parameter: name of new group
API hit to save new group*/
  addNewGroup(groupName) {
    let post = {
      bot: this.botId,
      title: groupName,
      position: 1,
      containsBrand: false
    }
    console.log('new group',post)
    var temp = {}
    if (groupName.length > 0) {
      this.service.addGroup(post)
        .subscribe(response => {
          console.log(response);
          post = JSON.parse(response['_body']);
          temp = post;
          console.log(temp);
          this.groups.push(temp);
          this.clear();
        });
    }
  }

  /*To save the card being worked on
parameter: card selected*/
  selectCard(c) {
    this.selectedCard = c;
    this.text = c.config.text;
    console.log(this.selectedCard);
    console.log("got 2 ?");
  }

  /*To save the card being worked on
parameter: card selected*/
  selectBlock(b) {
    this.block = b;
  }

  print(item) {
    console.log('item', item);
    return 1;
  }
  /*To display the blocks while selecting one for a button
    blockTitle: list of block titles to be displayed to select block
    blockIds: list of block ids to be stored ,used to pass block id to backend when selected 
    filteredList: contains list of block titles to display it while selecting blocks to add buttons*/
  filter() {
    console.log("filtering")
    var blockTitle = [];
    this.blockIds = [];
    //this.filteredList = this.blockArray

    if (this.query !== "") {
      this.filteredList = this.blockArray.filter(function (el) {
        if (el.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
          return el
        }
      }.bind(this));
    } else {
      this.filteredList = this.blockArray;
    }
   // console.log("filter: ", this.blockArray)
  }
  
// Filter Promo
promoFilter(x){
  if (x !== "") {
    this.filteredPromos = this.promos.filter(function (el) {
      if (el.name.toLowerCase().indexOf(x.toLowerCase()) > -1) {
        return el
      }
    }.bind(this));
  } else {
    this.filteredPromos = this.promos;
  }
}
selectPromo(promo,card){
  console.log("promoSelected");
card.config.text = promo.name;
card.config.promoId= promo._id;
this.updateCard(card);
}
  /**
    * @desc filteredList array will get empty
  */
  clearFilter() {
    this.filteredList = [];
  }

  /*To delete a button in the card 
  paramaeters: option- button to be deleted
                option_attributes - list of buttons in the card
                card- card contining the button 
                card is updated after slicing the button*/
  deleteButton(option, option_attributes, card) {
    var index = option_attributes.indexOf(option)
    option_attributes.splice(index, 1)
    this.updateCard(card);

  }

  /*To delete a card 
  paramaeters: card to be deleted
  API hit to delete card in backend too*/
  deleteCard(selectedBlockCards) {
    this.service.deleteCardFromBlock(this.selectedCard)
      .subscribe(response => {
      });
    this.block.cards.splice(this.block.cards.indexOf(this.selectedCard), 1);
  }

  /*To delete a block
  paramaeters: block to be deleted
  API hit to delete block in backend too*/
  deleteBlock(block) {
    console.log(block)
    var i = 0;
    var b = this.blocks;
    console.log(b, block);
    this.service.deleteBlockByBlockId(block._id)
      .subscribe(response => {
        this.blocks = [];
        b.forEach(blk => {
          if (blk._id != block._id) {
            this.blocks.push(blk);
          }
        }); console.log(b);
        console.log(this.blocks)
        this.block = this.first_block;
        this.blockArray = this.blocks;
      });
  }

  /*To delete a group 
  paramaeters: group to be deleted
  API hit to delete group in backend too*/
  deleteGroup() {
    var b = this.blocks;
    this.service.deleteGroupByGroupId(this.group._id)
      .subscribe(response => {
        console.log(response);
      });
    this.blocks.forEach(block => {
      if (block.parent_group == this.group._id) {
        this.service.deleteBlockByBlockId(block._id)
          .subscribe(response => {
            this.blocks.splice(this.blocks.indexOf(block), 1)
          });
      }
    });
    this.groups.splice(this.groups.indexOf(this.group), 1); this.block = this.first_block;
  }

  /*Function to set block to the new button, index is passed to find the block selected
  parameter:item - block to be set for button
            i-  index of the block selected
            card- card to which the button is added */
  select(blockData, card) {if(this.newButton.title != '')
  this.filteredList = [];
    console.log(blockData, card)
    this.query = blockData.title;
    //this.filteredList = [];
    this.newButton.block_id = blockData.id;
    console.log(this.newButton);
    if (card.plugin_id == 'list')
      this.addNewButton(card);
  }

  /*For adding button to list
  Function to set block to the new button, index is passed to find the block selected and
  to find element to which button is to be added
  parameter:item - block to be set for button
            k-  index of the element selected for which button is to be added
            card- card to which the button is added
            i-  index of the block selected */
  selectz(blockData, card, i) {
    console.log('in z');
    this.filteredList = [];
    //this.addNewButtonWithId(this.blockIds[i], card) //add button with id
    //console.log(this.newButton);
    this.newButton.block_id = blockData.id;
    this.addNewListButton(card, i+1)
  }

  /*For updating button to list
  Function to set block to the new button, index is passed to find the block selected and
  to find element to which button is to be added
  parameter:item - block to be set for button
            k-  index of the element selected for which button is to be added
            card- card to which the button is added
            i-  index of the block selected */
  selectelemlist(item, card, i) {
    console.log(item, card, i)
    this.filteredList = [];
    card.config.list_cards[i].buttons[0].block_id = item._id;
    console.log(this.newButton);
    this.updateCard(card);
  }

  /*For adding button to gallery
  Function to set block to the new button, index is passed to find the block selected and
  to find element to which button is to be added
  parameter:item - block to be set for button
            i-  index of the block selected          
            card- card to which the button is added
            g-  index of the gallery element selected for which button is to be added */
  selectgal(blockData, card, g) {if(this.newButton.title != '')
    this.filteredList = [];
    //this.addNewButtonWithId(this.blockIds[i], card) //add button with id
    //console.log(this.newButton);

    this.newButton.block_id = blockData.id;
    this.newButton.blockTitle = blockData.title;
    //alert(this.newButton.block_id)
    //console.log(this.blockIds[i])
    //console.log(this.newButton);
   // this.addNewGalleryButton(card, g);
  }

  /*For updating button to gallery
  Function to set block to the new button, index is passed to find the block selected and
  to find element to which button is to be added
  parameter:item - block to be set for button
            i-  index of the block selected          
            card- card to which the button is added
            j-  index of the gallery element selected for which button is to be added */
  select2(blockData, card, j) {
    //this.query = blockData.title;
    this.filteredList = [];
    console.log(card.config.buttons[j])
    //this.query = this.selectedButton.block_id.title;
    card.config.buttons[j].block_id = blockData.id;
    card.config.buttons[j].blockTitle = blockData.title;
    // alert(card);
    this.updateCard(card);
  }
  addNewButtonWithId(id, card) {

    // console.log(id)
    card.config.buttons.push({ block_id: id })
    this.updateCard(card)

  }


  /*adding new button to gallery
  parameters: card- card in which they are to be added
              i- index of the card in the set of cards of gallery */
  addNewGalleryButton(card, i) {
    console.log(this.newButton);
    console.log(card.config.gallery_cards[i]);
    if (this.newButton.title.length > 0 &&  (this.query!='' || this.newButton.url !='')) {
      if (this.query == '') {
        console.log('query empty')
        this.newBtn =
          { url: this.newButton.url, title: this.newButton.title }
        card.config.gallery_cards[i].buttons.push(this.newBtn);
        console.log(this.newBtn);
      } else {
        //alert(this.newButton.block_id)
        let btnData = {
          title: this.newButton.title,
          url: "",
          block_id: this.newButton.block_id
        }
        card.config.gallery_cards[i].buttons.push(btnData);
        console.log(this.newButton);
      }
      // card.config.buttons.push(id)
      // console.log(this.newButton.block_id)
      this.updateCard(card)
      // this.newButton.title = "";
    }

  }

  /* Update the text button 
  parameters: card- card in which button is to be updated
              j- index of the button to be updated*/
  remBlockFromTextButton(card, button, j) {
    var query = button.blockTitle;
    console.log(card,button,j,query)
    if((!(this.newBtn.title == '' || button.title == ''))   && (query || card.config.buttons[j].url !='') ){
    console.log('\ncard,button index, query', card, j, query, button);
    // if ((query == '') ||( card.config.buttons[j].url.length>0 && query.length > 0 )) {
      if(button.weburl){
      this.newBtn =
        { url: card.config.buttons[j].url, title: card.config.buttons[j].title }
      console.log('new button', this.newBtn);
      card.config.buttons[j] = this.newBtn;
    }
    else {
      this.newBtn =
      { block_id: button.block_id, title: card.config.buttons[j].title }
      card.config.buttons[j] = this.newBtn;
    }
    console.log('button after updating', card.config.buttons[j], card)
    this.updateCard(card);
  }
  else{
    console.log('Deleting button')
    this.deleteButton(button,card.config.buttons,card);
  }
}

  /* Update the gallery button 
  parameters: card- card in which button is to be updated
              g- index of the card in the set of gallery card to be updated
              j- index of the button to be updated*/
  remBlockFromGalleryButton(card, button, g, j) {
    var query = button.blockTitle;
    console.log('card', card, 'button', button, 'g', g, 'j', j, 'query', query)
    if((!(this.newBtn.title == '' || button.title == ''))   && (query || card.config.gallery_cards[g].buttons[j].url !='') ){
    if (button.weburl) {
      this.newBtn =
        { url: card.config.gallery_cards[g].buttons[j].url, title: card.config.gallery_cards[g].buttons[j].title }

      card.config.gallery_cards[g].buttons[j] = this.newBtn;
    }
    else {
      this.newBtn =
      { block_id: button.block_id, title: card.config.buttons[j].title }
      card.config.buttons[j] = this.newBtn;
    }
    this.updateCard(card);
  }
  else{
    console.log('Deleting button')
    this.deleteButton(button,card.config.gallery_cards[g].buttons,card);
  }
  }

  /* Update the gallery button 
  parameters: card- card in which button is to be updated
              i- index of the button to be updated*/
  remBlockFromListButton(card, button, i) {
    if((!(this.newBtn.title == '' || button.title == '')) && (this.query || card.config.list_cards[i].buttons[0].url !='') ){
    if (button.weburl) {
      this.newBtn =
        { url: card.config.list_cards[i].buttons[0].url, title: card.config.list_cards[i].buttons[0].title }
      card.config.list_cards[i].buttons[0] = this.newBtn;
    }
    else {
      this.newBtn =
      { block_id: button.block_id, title: card.config.list_cards[i].buttons[0].title }
      card.config.list_cards[i].buttons[0] = this.newBtn;
    }}
    else{
      this.deleteButton(button, card.config.list_cards[i].buttons,card)
    }
    this.updateCard(card);
  }

  select4(item, k, card, i) {
    console.log("wsws");
    this.query = item;
    this.filteredList = [];
    card.config.list_cards[i].buttons[0].block_id = this.blockIds[k];
    console.log(card.config);
    this.updateCard(card);
  }

  /*Function to update the card
  parameter: card to be updated
  API hit to update the card by card id and restore the response as data */
  updateCard(card) {
    console.log('now updating', card);
    this.service.updateCards(card)
      .subscribe(response => {
        console.log(response);
        var index = this.block.cards.indexOf(card);
        this.block.cards[index].is_valid = response.json().is_valid;
        console.log(this.block.cards[index]);
        console.log(this.block.cards)
      }
      , error => {
        console.log("error", error._body)
        var index = this.block.cards.indexOf(card);
        this.block.cards[index].is_valid = JSON.parse(error._body).is_valid;
        console.log("error update", this.block.cards[index]);
      }
      );

    console.log(card);
  }

  /*Function to delete the elements in list
  paramaeters: option- button to be deleted
                option_attributes - list of buttons in the card
                card- card contining the button 
                card is updated after slicing the button*/
  deleteListItem(option, option_attributes, card) {
    var index = option_attributes.indexOf(option)
    console.log(index)
    option_attributes.splice(index, 1)
    this.updateCard(card);
  }

  /*Function to add new empty element to list 
  parameters: list_cards- list of elements to which new element to be added
              card- card to which ew element is to be added*/
  addListItem(list_cards, card) {
    list_cards.push({
      buttons: [],
      image_url : '',
      title:'',
      subtitle:''
    })
    this.updateCard(card);
  }

  /*Functon to check validity of each element in gallery generated
    parameter: gallery card
    is set not valid if the title is empty and it does not have any buttons*/
  galleryValidity(card) {
    if (card.title != '' && (card.buttons.length > 0 || card.subtitle !='' ||card.image_url != ''))
      return false;
    return true;
  }

  /*Function to add new button to the element in a list
  parameters: card -list card
              i- index of the element in the card */
  addNewListButton(card, i) {

    console.log(this.query);
    if (this.newButton.title.length > 0) {
      if (this.query == '') {
        console.log('query empty')
        this.newBtn =
          { url: this.newButton.url, title: this.newButton.title }
        card.config.list_cards[i].buttons[0] = this.newBtn;
        console.log(this.newBtn,card);
      } else {
        let btnData = {
          title: this.newButton.title,
          block_id: this.newButton.block_id
        }
        card.config.list_cards[i].buttons[0] = btnData;
        console.log(this.newButton);
      }
      this.updateCard(card)
    }
    console.log(card);
  }
  /*Function to generate new card
  parameter:type-type of card to be geenerated
  The type of card is detected, the required schema with empty data is created 
  as payload and pushed to backend by hitting API*/
  addCard(type) {
    var card = {}

    console.log("so new id is");
    console.log(this.block._id);
    if (type == 'text') {//Schema for text card
      card = {
        config: {
          text: "",
          buttons: []
        },
        // is_valid: false,
        // position :2,
        plugin_id: 'text',
        blockId: this.block._id
      }
      this.block.cards.push(card);//pushing to front end and hitting API to store it in backend
      this.updateCard(card);
    } console.log(card);
    if (type == 'image') {//Schema for image card
      card = {
        config: {
          image_url: ""
        },
        plugin_id: 'image',
        blockId: this.block._id
      }
      this.block.cards.push(card);
    }
    if (type == 'promo') {//Schema for promo card
      card = {
        config: {
          buttons: [],
          text: ""
        },
        plugin_id: 'promo',
        blockId: this.block._id
      }
      this.block.cards.push(card);
    }
    if (type == 'quick_reply') {//Schema for quick reply card
      card = {
        config: {
          buttons: []
        },
        plugin_id: 'quick_reply',
        blockId: this.block._id
      }
      this.block.cards.push(card);
    }
    if (type == 'list') {//Schema for list card
      card = {
        config: {
          buttons: [],
          list_cards: [{
            buttons: [],
            title: '',
            subtitle: '',
            image_url: ''
          }, {
            buttons: []
          }],
          top_element_style: 'compact'
        },
        plugin_id: 'list',
        blockId: this.block._id
      }
      this.block.cards.push(card);
    }
    if (type == 'gallery') {//Schema for gsllery card
      card = {
        config: {
          gallery_cards: [{
            buttons: [],
            title: '',
            image_url: '',
            subtitle: ''
          }]
        },
        plugin_id: 'gallery',
        blockId: this.block._id
      }
      this.block.cards.push(card);
      console.log(card)
    }
    if (type == 'typing') {//Schema for typing card
      card = {
        plugin_id: 'typing',
        blockId: this.block._id,
        config: {
          'time': '0'
        }
      }
      this.block.cards.push(card);
      console.log(card)
    }
    this.service.addCardToBlock(card)
      .subscribe(response => {
        console.log("new card added:");
        var tempCard = JSON.parse(response['_body'])._id;
        console.log(tempCard)
        this.assignCardId(card, tempCard)
      }, error => {
        console.log("Error in adding new card:", error);
        if (error.status = 422) {
          var tempCard = error._body
          console.log(JSON.parse(tempCard)._id)
          this.assignCardId(card, JSON.parse(tempCard)._id)

        }
      });

  }

  assignCardId(card, id) {
    card._id = id
    console.log(id)
    if(card.plugin_id == 'quick_reply')
    this.addElementToQRCard(card.config.buttons, card)
  }
  constructor(private elem: ElementRef, private renderer: Renderer, private service: DataManagerService, private route: ActivatedRoute, private _router: Router) {
    $(document).ready(function () { console.log('jquery is working'); });
  }

  clipboardCopy(){
    // console.log('asdf');
    // var clipboard = new ClipboardEvent('copy');
    // console.log('clip',clipboard) 
    Clipboard.copy(this.blockLink);
  }
  setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }
  sub;
  // Carousel
  public carouselOne: NgxCarousel;
  saveGroup(x) {
    console.log(x.title);
    this.group = x;
    return 1;
  }
  /*To display set of blocks for quick reply */
  blockShow() {
    var blockTitle = [];
    for (var i = 0; i < this.blocks.length; i++) {
      blockTitle.push(this.blocks[i].title);
      this.blockIds.push(this.blocks[i]._id);
    }
    this.filteredList = blockTitle;
    this.blkshw = true;
  }
  /**Function which checks the quick reply to know when to close popup */
  check(card, button) {
    if (button.title != '' && this.query != '') {
      this.closeAllPop(card);
      this.assignQRBlockName(button)
    }
    if (button.block_id) {
      this.query = button.block_id.title;
    } else {
      this.query = "";
    }
  }
  a(button) {
    if (button.block_id) {
      this.query = button.block_id.title;
    } else {
      this.query = "";
    }

  }

  /*This function executes once as soon as the componenet is loaded 
  Functions performed: It gets all the groups
                        It gets all the blocks of the bot selected*/
  storeBlockArray() {
    this.blockArray = [];
    for (var i = 0; i < this.blocks.length; i++) {
      var obj = {
        title: this.blocks[i].title,
        id: this.blocks[i]._id
      }
      this.blockArray.push(obj)
    }
  }
  ngOnInit() {
    this.lastOneIsURL = false;
    this.blockIds = [];
    this.sub = this.route.params.subscribe(params => {
      this.botId = params['botId'];
      this.clientId = params['id'];
    });
    this.service.getBotDataByBotId(this.botId)
    .subscribe(response=>{
      this.bot = response.json();
      console.log();
      this.broadcastGroup_id = this.bot.broadcastGroup[0];
    })
    this.carouselOne = {
      grid: { xs: 1, sm: 6, md: 9, lg: 9, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
    this.service.getGroups(this.botId)//API hit to get groups of the bot selected
      .subscribe(response => {
        this.groups = response.json();
        console.log(this.groups);
        console.log("groups");
        this.groups.sort((a, b) => a._id < b._id ? -1 : a._id > b._id ? 1 : 0)
        this.first_group = this.groups[0];
      });
    this.service.getBlocksByBotId(this.botId)//API hit to get the blocks selected
      .subscribe(response => {
        this.blocks = response.json();
        this.storeBlockArray()
        // alert(this.blocks)
        console.log(this.blocks);
        console.log("blocks");
        this.blocks.forEach(element => {
          this.blockIds.push(element._id);
        }); console.log(this.blockIds);
        this.blocks.sort((a, b) => a._id < b._id ? -1 : a._id > b._id ? 1 : 0)
        this.first_block = this.blocks[0];
        this.block = this.first_block;
        this.service.getBlockByBlockId(this.blocks[0]._id)
          .subscribe(response => {
            //console.log("block data:", response.json());

            this.selectedBlock = response.json();
            this.block = this.selectedBlock[0];
            this.first_block = this.block;
            this.blockLink = 'https://m.me/'+this.bot.pageID+'?ref='+this.block._id;
          });
        console.log('first card', this.block)
      });
    this.blocks.forEach(element => {
      if (element.parent_group == this.group._id) {
        this.blocks = element
      }
    });

    var botId = this.botId
    console.log("bottttId:" + botId)
    //alert(this.botId)
    this.service.getPromos(this.clientId).subscribe(response=>{
      this.promos = response.json();
      console.log(this.promos);
      })
  }
  /*It gets the first block of the bot
  parameter: bot id of the bot selected 
  hits api to get first block of the bot selected and to display it*/
  firstB(botId) {
    this.service.getFirstBlockByBotId(botId).subscribe(response => {
      // alert(response)
      console.log("dasdasda");
      //console.log(response.json());
      this.block = response.json();
      this.block = this.block[0];
      this.selectedBlock = response.json();
      console.log(this.block);
      this.first_block = this.block;
      this.service.getGroups(botId)
        .subscribe(response => {
          this.groups = response.json();
          // alert(this.groups)
          console.log(this.groups);
          console.log("groups");
          this.groups.forEach(element => {
            if (this.block.parent_group == element._id) {
              this.group = element;
              this.first_group = this.group;
              this.z = this.group._id;
            }
          });
        });
    });
  }

  /*Function used to select blocks for quick reply
  parameters: item- block selected
              k- index of block selected
              card- gallery card
              j- index of the button*/
  selectQR(blockData, card, j) {
    this.filteredList = [];
    card.config.buttons[j].block_id = blockData.id;

    this.updateCard(card);
  }
  assignQRBlockName(button) {
    console.log("assignQRBlockName");
    // alert(button.block_id.title)
    this.query = "";
    // this.query = card.config.buttons[j].block_id.title
    if (button.block_id) {
      this.query = button.block_id.title;
    } else {
      this.query = "";
    }
    this.selectedButton = button;
    console.log(this.selectedButton);
    this.blocks.forEach(element => {
      if (this.selectedButton.block_id == element._id)
        this.query = element.title;
    });
    this.filteredList = [];
  }
  /*Function used to add element to quick reply card 
  parameters: buttons- button of quick reply
              card- quick reply card*/
  addElementToQRCard(buttons, card) {

    buttons.push({})
    this.updateCard(card);
  }

  /*To update block in gallery
  parameters: item- block selected
              k- index of block selected
              card- gallery card
              j- index of the button
              i- index of the card in the set of cards in gallery*/
  select3(blockData, card, j, i) {
    this.filteredList = [];
    card.config.gallery_cards[i].buttons[j].block_id = blockData.id;
    card.config.gallery_cards[i].buttons[j].blockTitle = blockData.title;
    this.updateCard(card);
  }

  /*Function used to add element to gallery card 
  parameters: galery_card- element of gallery card*/
  addElementToGalleryCard(gallery_card) {
    gallery_card.push({
      buttons: [],
      image_url: '',
      subtitle:'',
      title:''
    })
  }
  //Data used to set charecter limit
  clear() {
    this.newButton.title = "";
    this.newButton.url = "";
    this.query = "";
    this.group_name = '';
    this.block_name = '';
  }

  //validation
  result = {
    "buttons": {
      "count": {
        "max": 3,
        "min": 0
      },
      "title": {
        "max": 20,
        "min": 0
      }
    },
    "form": {
      "title": {
        "max": 80,
        "min": 0
      }
    },
    "gallery": {
      "subtitle": {
        "max": 80,
        "min": 0
      },
      "title": {
        "max": 80,
        "min": 0
      }
    },
    "quick_replies": {
      "count": {
        "max": 10,
        "min": 0
      },
      "title": {
        "max": 20,
        "min": 0
      }
    },
    "text": {
      "text": {
        "max": 640,
        "min": 1
      }
    }
  }
  validate(card) {
    var flag;
    var str1 = card.config.image_url;
    var str2 = card.config.item_url;
    var pattern = new RegExp('^((https?:)?\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locater
    var image = new RegExp('(.png|.jpg|.gif)$');
    if (str1) {
      console.log('validating', str1)
      if (!image.test(str1)) {
        card.isvalid_imgurl = true
      } else {
        card.isvalid_imgurl = false
      }
    }
    else {
      card.image_url = ""
      card.isvalid_imgurl = false
    }
    if (str2) {
      if (!pattern.test(str2)) {
        card.isvalid_url = true
      } else {
        card.isvalid_url = false
      }
    } else {
      card.item_url = ""
      card.isvalid_url = false
    }
    var obj = {
      'img_url': false,
      'itm_url': false
    }
    obj = {
      'img_url': card.isvalid_imgurl,
      'itm_url': card.isvalid_url
    }
    console.log('obj', obj)
    return obj;
  }
  private handleError(error) {
    console.error('Error processing action', error);
  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
  anyCardValid(cards){
    if(cards){
    var validity = false;
    for(var i=0;i<cards.length;i++){
      if(cards[i].is_valid)
      validity = true;
    }
    return validity;}
    return false;
  }
  addCoverImage(card){
    if(card.config.list_cards.length < 4){
    card.config.list_cards.unshift({
      buttons: [],
      image_url : '',title: '',subtitle:''
    })
    console.log("\naddCoverImage(card)\n");
    card.config.top_element_style = 'large';
    this.updateCard(card);
  }
}
}
