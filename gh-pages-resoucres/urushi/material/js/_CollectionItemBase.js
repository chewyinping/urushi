define("_CollectionItemBase",["underscore","jquery","extend","_collectionMixin"],function(i,t,e,n){"use strict";var r={ID_PREFIX:"urushi._collectionItemBase",EMBEDDED:{},ABSTRUCT_METHOD:function(){throw new Error("Abstruct Error")}},o=0;return Class.extend(i.extend(i.clone(n),{idPrefix:r.ID_PREFIX,id:"",init:function(i){var t=i||{};if(!t.owner)throw new Error("arguments must have owner");if(this._initProperties(t),this._render(t),this._attachNode(),this.initOption(t),this.setHidden===r.ABSTRUCT_METHOD)throw new Error("setHidden is a need to implement");if(this.isHidden===r.ABSTRUCT_METHOD)throw new Error("isHidden is a need to implement");t.owner._addSubItem(this)},_initProperties:function(i){this._initPropertiesCollectionMixin(i),this.id=i&&i.id||this._getId()},initOption:function(i){},_getId:function(){return r.ID_PREFIX+o++},_render:function(i){},_attachNode:function(){},setHidden:r.ABSTRUCT_METHOD,isHidden:r.ABSTRUCT_METHOD,destroy:function(){this._destroyCollectionMixin(),this.destroyOption()},destroyOption:function(){}}))});