webpackJsonp([12],{

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1024);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(373);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(99);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolkit = function () {
  function Toolkit() {
    (0, _classCallCheck3.default)(this, Toolkit);
  }

  (0, _createClass3.default)(Toolkit, null, [{
    key: 'guid',


    ///////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }

    /////////////////////////////////////////////
    //mobile detection
    //
    /////////////////////////////////////////////

  }, {
    key: 'loadDocument',


    /////////////////////////////////////////////////////////
    // Load a document from URN
    //
    /////////////////////////////////////////////////////////
    value: function loadDocument(urn) {

      return new _promise2.default(function (resolve, reject) {

        var paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

        Autodesk.Viewing.Document.load(paramUrn, function (doc) {

          resolve(doc);
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Return viewables
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewableItems',
    value: function getViewableItems(doc) {
      var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['3d', '2d'];


      var rootItem = doc.getRootItem();

      var items = [];

      var roleArray = roles ? Array.isArray(roles) ? roles : [roles] : [];

      roleArray.forEach(function (role) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, { type: 'geometry', role: role }, true)));
      });

      return items;
    }

    /////////////////////////////////////////////////////////
    // Toolbar button
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createButton',
    value: function createButton(id, className, tooltip, handler) {

      var button = new Autodesk.Viewing.UI.Button(id);

      button.icon.style.fontSize = '24px';

      button.icon.className = className;

      button.setToolTip(tooltip);

      button.onClick = handler;

      return button;
    }

    /////////////////////////////////////////////////////////
    // Control group
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createControlGroup',
    value: function createControlGroup(viewer, ctrlGroupName) {

      var viewerToolbar = viewer.getToolbar(true);

      if (viewerToolbar) {

        var ctrlGroup = new Autodesk.Viewing.UI.ControlGroup(ctrlGroupName);

        viewerToolbar.addControl(ctrlGroup);

        return ctrlGroup;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getLeafNodes',
    value: function getLeafNodes(model, dbIds) {

      return new _promise2.default(function (resolve, reject) {

        try {

          var _instanceTree = model.getData().instanceTree;

          dbIds = dbIds || _instanceTree.getRootId();

          var dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];

          var leafIds = [];

          var getLeafNodesRec = function getLeafNodesRec(id) {

            var childCount = 0;

            _instanceTree.enumNodeChildren(id, function (childId) {

              getLeafNodesRec(childId);

              ++childCount;
            });

            if (childCount == 0) {

              leafIds.push(id);
            }
          };

          for (var i = 0; i < dbIdArray.length; ++i) {

            getLeafNodesRec(dbIdArray[i]);
          }

          return resolve(leafIds);
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    // get node fragIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getFragIds',
    value: function getFragIds(model, dbIds) {
      var _this = this;

      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var i, _ret;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  return _context2.delegateYield( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var instanceTree, dbIdArray, leafIds, fragIds;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            instanceTree = model.getData().instanceTree;


                            dbIds = dbIds || instanceTree.getRootId();

                            dbIdArray = Array.isArray(dbIds) ? dbIds : [dbIds];
                            _context.next = 5;
                            return Toolkit.getLeafNodes(model, dbIdArray);

                          case 5:
                            leafIds = _context.sent;
                            fragIds = [];


                            for (i = 0; i < leafIds.length; ++i) {

                              instanceTree.enumNodeFragments(leafIds[i], function (fragId) {
                                fragIds.push(fragId);
                              });
                            }

                            return _context.abrupt('return', {
                              v: resolve(fragIds)
                            });

                          case 9:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  })(), 't0', 2);

                case 2:
                  _ret = _context2.t0;

                  if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt('return', _ret.v);

                case 5:
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t1 = _context2['catch'](0);
                  return _context2.abrupt('return', reject(_context2.t1));

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this, [[0, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // get leaf node fragIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getLeafFragIds',
    value: function getLeafFragIds(model, leafId) {

      var instanceTree = model.getData().instanceTree;

      var fragIds = [];

      instanceTree.enumNodeFragments(leafId, function (fragId) {
        fragIds.push(fragId);
      });

      return fragIds;
    }

    /////////////////////////////////////////////////////////
    // Node bounding box
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getWorldBoundingBox',
    value: function getWorldBoundingBox(model, dbId) {
      var _this2 = this;

      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var fragIds, fragList, fragbBox, nodebBox;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Toolkit.getFragIds(model, dbId);

                case 3:
                  fragIds = _context3.sent;

                  if (fragIds.length) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt('return', reject('No geometry, invalid dbId?'));

                case 6:
                  fragList = model.getFragmentList();
                  fragbBox = new THREE.Box3();
                  nodebBox = new THREE.Box3();


                  fragIds.forEach(function (fragId) {

                    fragList.getWorldBounds(fragId, fragbBox);
                    nodebBox.union(fragbBox);
                  });

                  return _context3.abrupt('return', resolve(nodebBox));

                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3['catch'](0);
                  return _context3.abrupt('return', reject(_context3.t0));

                case 16:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[0, 13]]);
        }));

        return function (_x5, _x6) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // Gets properties from component
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getProperties',
    value: function getProperties(model, dbId) {
      var requestedProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      return new _promise2.default(function (resolve, reject) {

        try {

          var dbIdInt = parseInt(dbId);

          if (isNaN(dbIdInt)) {

            return reject(dbId + ' is not a valid integer');
          }

          if (requestedProps) {

            var propTasks = requestedProps.map(function (displayName) {

              return Toolkit.getProperty(model, dbIdInt, displayName, 'Not Available');
            });

            _promise2.default.all(propTasks).then(function (properties) {

              resolve(properties);
            });
          } else {

            model.getProperties(dbIdInt, function (result) {

              if (result.properties) {

                return resolve(result.properties);
              }

              return reject('No Properties');
            });
          }
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getProperty',
    value: function getProperty(model, dbId, displayName, defaultValue) {

      return new _promise2.default(function (resolve, reject) {

        try {

          model.getProperties(dbId, function (result) {

            if (result.properties) {

              result.properties.forEach(function (prop) {

                prop.dbId = dbId;

                if (typeof displayName === 'function') {

                  if (displayName(prop.displayName)) {

                    resolve(prop);
                  }
                } else if (displayName === prop.displayName) {

                  resolve(prop);
                }
              });

              if (defaultValue) {

                return resolve({
                  displayValue: defaultValue,
                  displayName: displayName,
                  dbId: dbId
                });
              }

              reject(new Error('Not Found'));
            } else {

              reject(new Error('Error getting properties'));
            }
          });
        } catch (ex) {

          return reject(ex);
        }
      });
    }

    /////////////////////////////////////////////////////////
    // Gets all existing properties from component  dbIds
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getPropertyList',
    value: function getPropertyList(viewer, dbIds) {
      var _this3 = this;

      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var propertyTasks, propertyResults, properties;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;


                  model = model || viewer.activeModel || viewer.model;

                  propertyTasks = dbIds.map(function (dbId) {

                    return Toolkit.getProperties(model, dbId);
                  });
                  _context4.next = 5;
                  return _promise2.default.all(propertyTasks);

                case 5:
                  propertyResults = _context4.sent;
                  properties = [];


                  propertyResults.forEach(function (propertyResult) {

                    propertyResult.forEach(function (prop) {

                      if (properties.indexOf(prop.displayName) < 0) {

                        properties.push(prop.displayName);
                      }
                    });
                  });

                  return _context4.abrupt('return', resolve(properties.sort()));

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', reject(_context4.t0));

                case 14:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this3, [[0, 11]]);
        }));

        return function (_x9, _x10) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getBulkPropertiesAsync',
    value: function getBulkPropertiesAsync(model, dbIds, propFilter) {
      var _this4 = this;

      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var propTasks, propRes, filteredRes, propFilterArray;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(typeof propFilter === 'function')) {
                    _context5.next = 9;
                    break;
                  }

                  propTasks = dbIds.map(function (dbId) {

                    return _this4.getProperty(model, dbId, propFilter, 'Not Found');
                  });
                  _context5.next = 4;
                  return _promise2.default.all(propTasks);

                case 4:
                  propRes = _context5.sent;
                  filteredRes = propRes.filter(function (res) {

                    return res.displayValue !== 'Not Found';
                  });


                  resolve(filteredRes.map(function (res) {

                    return {
                      properties: [res],
                      dbId: res.dbId
                    };
                  }));

                  _context5.next = 11;
                  break;

                case 9:
                  propFilterArray = Array.isArray(propFilter) ? propFilter : [propFilter];


                  model.getBulkProperties(dbIds, propFilterArray, function (result) {

                    resolve(result);
                  }, function (error) {

                    reject(error);
                  });

                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this4);
        }));

        return function (_x11, _x12) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    // Maps components by property
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'mapComponentsByProp',
    value: function mapComponentsByProp(model, propFilter, components, defaultProp) {
      var _this5 = this;

      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(resolve, reject) {
          var results, propertyResults, componentsMap;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return Toolkit.getBulkPropertiesAsync(model, components, propFilter);

                case 3:
                  results = _context6.sent;
                  propertyResults = results.map(function (result) {

                    var prop = result.properties[0];

                    return (0, _assign2.default)({}, prop, {
                      dbId: result.dbId
                    });
                  });
                  componentsMap = {};


                  propertyResults.forEach(function (result) {

                    var value = result.displayValue;

                    if (typeof value == 'string') {

                      value = value.split(':')[0];
                    }

                    if (!componentsMap[value]) {

                      componentsMap[value] = [];
                    }

                    componentsMap[value].push(result.dbId);
                  });

                  return _context6.abrupt('return', resolve(componentsMap));

                case 10:
                  _context6.prev = 10;
                  _context6.t0 = _context6['catch'](0);
                  return _context6.abrupt('return', reject(_context6.t0));

                case 13:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this5, [[0, 10]]);
        }));

        return function (_x13, _x14) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////////
    // Runs recursively the argument task on each node
    // of the data tree
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'runTaskOnDataTree',
    value: function runTaskOnDataTree(root, taskFunc) {

      var tasks = [];

      var runTaskOnDataTreeRec = function runTaskOnDataTreeRec(node) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


        if (node.children) {

          node.children.forEach(function (childNode) {

            runTaskOnDataTreeRec(childNode, node);
          });
        }

        var task = taskFunc(node, parent);

        tasks.push(task);
      };

      runTaskOnDataTreeRec(root);

      return _promise2.default.all(tasks);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'drawBox',
    value: function drawBox(viewer, min, max, material, overlayId) {

      var geometry = new THREE.Geometry();

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));

      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, min.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, min.z));

      geometry.vertices.push(new THREE.Vector3(max.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(max.x, max.y, max.z));

      geometry.vertices.push(new THREE.Vector3(min.x, min.y, max.z));
      geometry.vertices.push(new THREE.Vector3(min.x, max.y, max.z));

      var lines = new THREE.Line(geometry, material, THREE.LinePieces);

      viewer.impl.addOverlay(overlayId, lines);

      viewer.impl.invalidate(true, true, true);

      return lines;
    }

    /////////////////////////////////////////////////////////
    // Set component material
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setMaterial',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(model, dbId, material) {
        var fragIds, fragList;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Toolkit.getFragIds(model, dbId);

              case 2:
                fragIds = _context7.sent;
                fragList = model.getFragmentList();


                fragIds.forEach(function (fragId) {

                  fragList.setMaterial(fragId, material);
                });

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setMaterial(_x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      }

      return setMaterial;
    }()

    /////////////////////////////////////////////////////////
    // Recursively builds the model tree
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildModelTree',
    value: function buildModelTree(model) {
      var createNodeFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      //builds model tree recursively
      function _buildModelTreeRec(node) {

        instanceTree.enumNodeChildren(node.dbId, function (childId) {

          var childNode = null;

          if (createNodeFunc) {

            childNode = createNodeFunc(childId);
          } else {

            node.children = node.children || [];

            childNode = {
              dbId: childId,
              name: instanceTree.getNodeName(childId)
            };

            node.children.push(childNode);
          }

          _buildModelTreeRec(childNode);
        });
      }

      //get model instance tree and root component
      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      var rootNode = {
        dbId: rootId,
        name: instanceTree.getNodeName(rootId)
      };

      _buildModelTreeRec(rootNode);

      return rootNode;
    }

    /////////////////////////////////////////////////////////
    // Recursively execute task on model tree
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'executeTaskOnModelTree',
    value: function executeTaskOnModelTree(model, task) {

      var taskResults = [];

      function _executeTaskOnModelTreeRec(dbId) {

        instanceTree.enumNodeChildren(dbId, function (childId) {

          taskResults.push(task(model, childId));

          _executeTaskOnModelTreeRec(childId);
        });
      }

      //get model instance tree and root component
      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      _executeTaskOnModelTreeRec(rootId);

      return taskResults;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'hide',
    value: function hide(viewer) {
      var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      try {

        model = model || viewer.activeModel || viewer.model;

        viewer.hide(dbIds);

        var targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];

        var tasks = targetIds.map(function (dbId) {

          return new _promise2.default(function (resolve) {

            viewer.impl.visibilityManager.setNodeOff(dbId, true);

            resolve();
          });
        });

        return _promise2.default.all(tasks);
      } catch (ex) {

        return _promise2.default.reject(ex);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'show',
    value: function show(viewer) {
      var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      try {

        model = model || viewer.activeModel || viewer.model;

        viewer.show(dbIds);

        var targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];

        targetIds.forEach(function (dbId) {

          viewer.impl.visibilityManager.setNodeOff(dbId, false);
        });

        return _promise2.default.resolve();
      } catch (ex) {

        return _promise2.default.reject(ex);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'isolateFull',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(viewer) {
        var dbIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var targetIds, targetLeafIds, leafIds, leafTasks;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;


                model = model || viewer.activeModel || viewer.model;

                viewer.isolate(dbIds);

                targetIds = Array.isArray(dbIds) ? dbIds : [dbIds];
                _context8.next = 6;
                return Toolkit.getLeafNodes(model, targetIds);

              case 6:
                targetLeafIds = _context8.sent;
                _context8.next = 9;
                return Toolkit.getLeafNodes(model);

              case 9:
                leafIds = _context8.sent;
                leafTasks = leafIds.map(function (dbId) {

                  return new _promise2.default(function (resolveLeaf) {

                    var show = !targetLeafIds.length || targetLeafIds.indexOf(dbId) > -1;

                    viewer.impl.visibilityManager.setNodeOff(dbId, !show);

                    resolveLeaf();
                  });
                });
                return _context8.abrupt('return', _promise2.default.all(leafTasks));

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', _promise2.default.reject(_context8.t0));

              case 17:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 14]]);
      }));

      function isolateFull(_x24) {
        return _ref7.apply(this, arguments);
      }

      return isolateFull;
    }()

    ///////////////////////////////////////////////////////////////////
    // Rotate selected fragments
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'rotateFragments',
    value: function rotateFragments(viewer, fragIds, axis, angle, center) {
      var model = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;


      var quaternion = new THREE.Quaternion();

      quaternion.setFromAxisAngle(axis, angle);

      model = model || viewer.activeModel || viewer.model;

      fragIds.forEach(function (fragId) {

        var fragProxy = viewer.impl.getFragmentProxy(model, fragId);

        fragProxy.getAnimTransform();

        var position = new THREE.Vector3(fragProxy.position.x - center.x, fragProxy.position.y - center.y, fragProxy.position.z - center.z);

        position.applyQuaternion(quaternion);

        position.add(center);

        fragProxy.position = position;

        fragProxy.quaternion.multiplyQuaternions(quaternion, fragProxy.quaternion);

        fragProxy.updateAnimTransform();
      });
    }

    /////////////////////////////////////////////////////////
    // A fix for viewer.restoreState
    // that also restores pivotPoint
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'restoreStateWithPivot',
    value: function restoreStateWithPivot(viewer, state) {
      var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


      var onStateRestored = function onStateRestored() {

        viewer.removeEventListener(Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT, onStateRestored);

        var pivot = state.viewport.pivotPoint;

        setTimeout(function () {

          viewer.navigation.setPivotPoint(new THREE.Vector3(pivot[0], pivot[1], pivot[2]));
        }, immediate ? 0 : 1250);
      };

      viewer.addEventListener(Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT, onStateRestored);

      viewer.restoreState(state, filter, immediate);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getComponentsByParentName',
    value: function getComponentsByParentName(name, model) {

      var instanceTree = model.getData().instanceTree;

      var rootId = instanceTree.getRootId();

      var parentId = 0;

      instanceTree.enumNodeChildren(rootId, function (childId) {

        var nodeName = instanceTree.getNodeName(childId);

        if (nodeName.indexOf(name) > -1) {

          parentId = childId;
        }
      });

      return parentId > 0 ? Toolkit.getLeafNodes(model, parentId) : [];
    }

    /////////////////////////////////////////////////////////
    // Creates a standard THREE.Mesh out of a Viewer
    // component
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildComponentMesh',
    value: function buildComponentMesh(viewer, model, dbId, faceFilter, material) {

      var vertexArray = [];

      // first we assume the component dbId is a leaf
      // component: ie has no child so contains
      // geometry. This util method will return all fragIds
      // associated with that specific dbId
      var fragIds = Toolkit.getLeafFragIds(model, dbId);

      var matrixWorld = null;

      var meshGeometry = new THREE.Geometry();

      fragIds.forEach(function (fragId) {

        // for each fragId, get the proxy in order to access
        // THREE geometry
        var renderProxy = viewer.impl.getRenderProxy(model, fragId);

        matrixWorld = matrixWorld || renderProxy.matrixWorld;

        var geometry = renderProxy.geometry;

        var attributes = geometry.attributes;

        var positions = geometry.vb ? geometry.vb : attributes.position.array;

        var indices = attributes.index.array || geometry.ib;

        var stride = geometry.vb ? geometry.vbstride : 3;

        var offsets = [{
          count: indices.length,
          index: 0,
          start: 0
        }];

        for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

          var start = offsets[oi].start;
          var count = offsets[oi].count;
          var index = offsets[oi].index;

          for (var i = start, il = start + count; i < il; i += 3) {

            var a = index + indices[i];
            var b = index + indices[i + 1];
            var c = index + indices[i + 2];

            var vA = new THREE.Vector3();
            var vB = new THREE.Vector3();
            var vC = new THREE.Vector3();

            vA.fromArray(positions, a * stride);
            vB.fromArray(positions, b * stride);
            vC.fromArray(positions, c * stride);

            if (!faceFilter || faceFilter(vA, vB, vC)) {

              var faceIdx = meshGeometry.vertices.length;

              meshGeometry.vertices.push(vA);
              meshGeometry.vertices.push(vB);
              meshGeometry.vertices.push(vC);

              var face = new THREE.Face3(faceIdx, faceIdx + 1, faceIdx + 2);

              meshGeometry.faces.push(face);
            }
          }
        }
      });

      meshGeometry.applyMatrix(matrixWorld);
      meshGeometry.computeFaceNormals();
      meshGeometry.computeVertexNormals();

      // creates THREE.Mesh
      var mesh = new THREE.Mesh(meshGeometry, material);

      mesh.dbId = dbId;

      return mesh;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'selectiveExplode',
    value: function selectiveExplode(viewer, scale, excludedFragIds) {
      var model = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;


      model = model || viewer.activeModel || viewer.model;

      var svf = model.getData();

      var mc = model.getVisibleBounds(true).center();

      var fragList = model.getFragmentList();

      var pt = new THREE.Vector3();

      //Input scale is in the range 0-1, where 0
      //means no displacement, and 1 maximum reasonable displacement.
      scale *= 2;

      //If we have a full part hierarchy we can use a
      //better grouping strategy when exploding
      if (svf.instanceTree && svf.instanceTree.nodeAccess.nodeBoxes && scale !== 0) {

        var scaledExplodeDepth = scale * (svf.instanceTree.maxDepth - 1) + 1;
        var explodeDepth = 0 | scaledExplodeDepth;
        var currentSegmentFraction = scaledExplodeDepth - explodeDepth;

        var it = svf.instanceTree;
        var tmpBox = new Float32Array(6);

        (function explodeRec(nodeId, depth, cx, cy, cz, ox, oy, oz) {

          var oscale = scale * 2;

          // smooth transition of this tree depth
          // from non-exploded to exploded state
          if (depth == explodeDepth) oscale *= currentSegmentFraction;

          it.getNodeBox(nodeId, tmpBox);

          var mycx = 0.5 * (tmpBox[0] + tmpBox[3]);
          var mycy = 0.5 * (tmpBox[1] + tmpBox[4]);
          var mycz = 0.5 * (tmpBox[2] + tmpBox[5]);

          if (depth > 0 && depth <= explodeDepth) {
            var dx = (mycx - cx) * oscale;
            var dy = (mycy - cy) * oscale;
            var dz = (mycz - cz) * oscale;

            //var omax = Math.max(dx, Math.max(dy, dz));
            ox += dx;
            oy += dy;
            oz += dz;
          }

          svf.instanceTree.enumNodeChildren(nodeId, function (dbId) {

            explodeRec(dbId, depth + 1, mycx, mycy, mycz, ox, oy, oz);
          }, false);

          svf.instanceTree.enumNodeFragments(nodeId, function (fragId) {

            if (excludedFragIds.indexOf(fragId.toString()) < 0) {

              pt.x = ox;
              pt.y = oy;
              pt.z = oz;

              fragList.updateAnimTransform(fragId, null, null, pt);
            }
          }, false);
        })(svf.instanceTree.getRootId(), 0, mc.x, mc.y, mc.x, 0, 0, 0);
      } else {

        var boxes = fragList.fragments.boxes;

        var nbFrags = fragList.getCount();

        for (var fragId = 0; fragId < nbFrags; ++fragId) {

          if (excludedFragIds.indexOf(fragId.toString()) < 0) {

            if (scale == 0) {

              fragList.updateAnimTransform(fragId);
            } else {

              var box_offset = fragId * 6;

              var cx = 0.5 * (boxes[box_offset] + boxes[box_offset + 3]);
              var cy = 0.5 * (boxes[box_offset + 1] + boxes[box_offset + 4]);
              var cz = 0.5 * (boxes[box_offset + 2] + boxes[box_offset + 5]);

              cx = scale * (cx - mc.x);
              cy = scale * (cy - mc.y);
              cz = scale * (cz - mc.z);

              pt.x = cx;
              pt.y = cy;
              pt.z = cz;

              fragList.updateAnimTransform(fragId, null, null, pt);
            }
          }
        }
      }
    }
  }, {
    key: 'mobile',
    get: function get() {

      return {

        getUserAgent: function getUserAgent() {
          return navigator.userAgent;
        },
        isAndroid: function isAndroid() {
          return this.getUserAgent().match(/Android/i);
        },
        isBlackBerry: function isBlackBerry() {
          return this.getUserAgent().match(/BlackBerry/i);
        },
        isIOS: function isIOS() {
          return this.getUserAgent().match(/iPhone|iPad|iPod/i);
        },
        isOpera: function isOpera() {
          return this.getUserAgent().match(/Opera Mini/i);
        },
        isWindows: function isWindows() {
          return this.isWindowsDesktop() || this.isWindowsMobile();
        },
        isWindowsMobile: function isWindowsMobile() {
          return this.getUserAgent().match(/IEMobile/i);
        },
        isWindowsDesktop: function isWindowsDesktop() {
          return this.getUserAgent().match(/WPDesktop/i);
        },
        isAny: function isAny() {

          return this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isWindowsMobile();
        }
      };
    }
  }]);
  return Toolkit;
}();

exports.default = Toolkit;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.Toolkit.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1028);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WidgetContainer = __webpack_require__(1030);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WidgetContainer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiModelExtensionBase = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(MultiModelExtensionBase, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MultiModelExtensionBase(viewer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, MultiModelExtensionBase);

    // bindings

    var _this = (0, _possibleConstructorReturn3.default)(this, (MultiModelExtensionBase.__proto__ || (0, _getPrototypeOf2.default)(MultiModelExtensionBase)).call(this, viewer));

    _this.onModelCompletedLoad = _this.onModelCompletedLoad.bind(_this);
    _this.onObjectTreeCreated = _this.onObjectTreeCreated.bind(_this);
    _this.onModelRootLoaded = _this.onModelRootLoaded.bind(_this);
    _this.onExtensionLoaded = _this.onExtensionLoaded.bind(_this);
    _this.onModelActivated = _this.onModelActivated.bind(_this);
    _this.onGeometryLoaded = _this.onGeometryLoaded.bind(_this);
    _this.onToolbarCreated = _this.onToolbarCreated.bind(_this);
    _this.onModelBeginLoad = _this.onModelBeginLoad.bind(_this);
    _this.onModelUnloaded = _this.onModelUnloaded.bind(_this);
    _this.onSelection = _this.onSelection.bind(_this);

    _this.__onModelActivated = _this.__onModelActivated.bind(_this);
    _this.__onModelUnloaded = _this.__onModelUnloaded.bind(_this);
    _this.__onModelLoaded = _this.__onModelLoaded.bind(_this);

    _this.defaultOptions = defaultOptions;

    _this.options = (0, _assign2.default)({}, defaultOptions, options);

    _this.viewer = viewer;

    // read the modelQueue to detect currently loaded models
    // when the extension gets loaded
    var models = viewer.impl.modelQueue().getModels();

    _this.models = models.map(function (model) {

      model.guid = model.guid || _this.guid();

      return model;
    });

    _this.initializeEvents();
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MultiModelExtensionBase, [{
    key: 'load',


    /////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////
    value: function load() {

      return true;
    }

    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {
      var _this2 = this;

      this.viewerEvents.forEach(function (event) {

        _this2.viewer.removeEventListener(event.id, _this2[event.handler]);
      });

      if (this.eventSink) {

        this.eventSink.off('model.activated', this.__onModelActivated);

        this.eventSink.off('model.unloaded', this.__onModelUnloaded);

        this.eventSink.off('model.loaded', this.__onModelLoaded);
      }

      return true;
    }

    /////////////////////////////////////////////////////////
    // Reload callback, in case the extension is re-loaded
    // more than once
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'reload',
    value: function reload() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      this.options = (0, _assign2.default)({}, this.defaultOptions, this.options, options);

      return true;
    }

    /////////////////////////////////////////////////////////
    // Invoked when extension gets loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onExtensionLoaded',
    value: function onExtensionLoaded(event) {}

    //console.log('MultiModelExtensionBase.onExtensionLoaded')


    /////////////////////////////////////////////////////////
    // Invoked when the model starts to load
    // The geometry and instanceTree may not be available
    // at this time
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelBeginLoad',
    value: function onModelBeginLoad(event) {}

    //console.log('MultiModelExtensionBase.onModelBeginLoad')


    /////////////////////////////////////////////////////////
    // Triggered by ModelLoader extension when a model is
    // selected in a multi-model environment
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelActivated',
    value: function onModelActivated(event) {}

    //console.log('MultiModelExtensionBase.onModelActivated')


    /////////////////////////////////////////////////////////
    // Invoked when model root node has been loaded
    // Extensions that do not require access to full
    // model geometry or component tree may use that
    // event to know a new model has been loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded(event) {
      var _this3 = this;

      this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function (args) {

        _this3.onModelCompletedLoad(args[0]);
      });
    }

    /////////////////////////////////////////////////////////
    // Invoked when object tree is fully loaded.
    // Extensions that are interested in using the
    // instanceTree need to use that event to make sure
    // it is available
    //
    ////////////////////////////////////////////////////////

  }, {
    key: 'onObjectTreeCreated',
    value: function onObjectTreeCreated(event) {}

    //console.log('MultiModelExtensionBase.onObjectTreeCreated')


    /////////////////////////////////////////////////////////
    // Invoked when geometry is fully loaded
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onGeometryLoaded',
    value: function onGeometryLoaded(event) {}

    //console.log('MultiModelExtensionBase.onGeometryLoaded')


    /////////////////////////////////////////////////////////
    // Invoked after onObjectTreeCreated and onGeometryLoaded
    // have both been fired
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelCompletedLoad',
    value: function onModelCompletedLoad(event) {}

    //console.log('MultiModelExtensionBase.onModelCompletedLoad')


    /////////////////////////////////////////////////////////
    // Invoked once the viewer toolbar has been created
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onToolbarCreated',
    value: function onToolbarCreated(event) {}

    //console.log('MultiModelExtensionBase.onToolbarCreated')


    /////////////////////////////////////////////////////////
    // Triggered by ModelLoader extension when a model has
    // been unloaded as per user request
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelUnloaded',
    value: function onModelUnloaded(event) {}

    //console.log('MultiModelExtensionBase.onModelUnloaded')


    /////////////////////////////////////////////////////////
    // Invoked when a model is being selected
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSelection',
    value: function onSelection(event) {}

    //console.log('MultiModelExtensionBase.onSelection')


    /////////////////////////////////////////////////////////
    //Sink Events
    //
    /////////////////////////////////////////////////////////

  }, {
    key: '__onModelLoaded',
    value: function __onModelLoaded(event) {

      this.models = [].concat((0, _toConsumableArray3.default)(this.models), [event.model]);

      this.onModelBeginLoad(event);
    }
  }, {
    key: '__onModelActivated',
    value: function __onModelActivated(event) {

      this.onModelActivated(event);
    }
  }, {
    key: '__onModelUnloaded',
    value: function __onModelUnloaded(event) {

      this.models = this.models.filter(function (model) {

        return model.guid !== event.model.guid;
      });

      this.onModelUnloaded(event);
    }

    /////////////////////////////////////////////////////////
    // Initialize all events for the extension
    // Each event will invoke a predefined handler
    // implemented or not by the derived extension
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'initializeEvents',
    value: function initializeEvents() {
      var _this4 = this;

      if (this.options.eventSink) {

        // event object passed in options
        this.eventSink = this.options.eventSink;

        this.eventSink.on('model.loaded', this.__onModelLoaded);

        this.eventSink.on('model.activated', this.__onModelActivated);

        this.eventSink.on('model.unloaded', this.__onModelUnloaded);
      }

      this.viewerEvents = [{
        id: Autodesk.Viewing.EXTENSION_LOADED_EVENT,
        handler: 'onExtensionLoaded'
      }, {
        id: Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
        handler: 'onObjectTreeCreated'
      }, {
        id: Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,
        handler: 'onModelRootLoaded'
      }, {
        id: Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
        handler: 'onGeometryLoaded'
      }, {
        id: Autodesk.Viewing.TOOLBAR_CREATED_EVENT,
        handler: 'onToolbarCreated'
      }, {
        id: Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,
        handler: 'onSelection'
      }];

      this.viewerEvents.forEach(function (event) {

        _this4.viewerEvent(event.id, _this4[event.handler]);
      });
    }

    /////////////////////////////////////////////////////////
    // Async viewer event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'viewerEvent',
    value: function viewerEvent(eventId, handler) {
      var _this5 = this;

      if (handler) {

        this.viewer.addEventListener(eventId, handler);
        return;
      }

      var eventIdArray = Array.isArray(eventId) ? eventId : [eventId];

      var eventTasks = eventIdArray.map(function (id) {
        return new _promise2.default(function (resolve) {
          var __handler = function __handler(args) {
            _this5.viewer.removeEventListener(id, __handler);
            resolve(args);
          };
          _this5.viewer.addEventListener(id, __handler);
        });
      });

      return _promise2.default.all(eventTasks);
    }
  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.MultiModelExtensionBase';
    }
  }]);
  return MultiModelExtensionBase;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.Extension));

exports.default = MultiModelExtensionBase;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.MultiModelExtensionBase.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONST_VAR = {
  SORT_DESC: 'desc',
  SORT_ASC: 'asc',
  AWAIT_BEFORE_CELL_EDIT: 1,
  SIZE_PER_PAGE: 10,
  NEXT_PAGE: '>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE: '>>',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE: '<',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE: '<<',
  FIRST_PAGE_TITLE: 'first page',
  PAGE_START_INDEX: 1,
  ROW_SELECT_BG_COLOR: '',
  ROW_SELECT_NONE: 'none',
  ROW_SELECT_SINGLE: 'radio',
  ROW_SELECT_MULTI: 'checkbox',
  CELL_EDIT_NONE: 'none',
  CELL_EDIT_CLICK: 'click',
  CELL_EDIT_DBCLICK: 'dbclick',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  PAGINATION_SIZE: 5,
  PAGINATION_POS_TOP: 'top',
  PAGINATION_POS_BOTTOM: 'bottom',
  PAGINATION_POS_BOTH: 'both',
  NO_DATA_TEXT: 'There is no data to display',
  SHOW_ONLY_SELECT: 'Show Selected Only',
  SHOW_ALL: 'Show All',
  EXPORT_CSV_TEXT: 'Export to CSV',
  INSERT_BTN_TEXT: 'New',
  DELETE_BTN_TEXT: 'Delete',
  SAVE_BTN_TEXT: 'Save',
  CLOSE_BTN_TEXT: 'Close',
  FILTER_DELAY: 500,
  SCROLL_TOP: 'Top',
  SCROLL_BOTTOM: 'Bottom',
  FILTER_TYPE: {
    TEXT: 'TextFilter',
    REGEX: 'RegexFilter',
    SELECT: 'SelectFilter',
    NUMBER: 'NumberFilter',
    DATE: 'DateFilter',
    CUSTOM: 'CustomFilter'
  },
  FILTER_COND_EQ: 'eq',
  FILTER_COND_LIKE: 'like',
  EXPAND_BY_ROW: 'row',
  EXPAND_BY_COL: 'column',
  CANCEL_TOASTR: 'Pressed ESC can cancel',
  REMOTE_SORT: 'sort',
  REMOTE_PAGE: 'pagination',
  REMOTE_CELL_EDIT: 'cellEdit',
  REMOTE_INSERT_ROW: 'insertRow',
  REMOTE_DROP_ROW: 'dropRow',
  REMOTE_FILTER: 'filter',
  REMOTE_SEARCH: 'search',
  REMOTE_EXPORT_CSV: 'exportCSV',
  DEFAULT_CSV_SEPARATOR: ','
};

CONST_VAR.REMOTE = {};
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SORT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_PAGE] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_CELL_EDIT] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_INSERT_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_DROP_ROW] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_FILTER] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_SEARCH] = false;
CONST_VAR.REMOTE[CONST_VAR.REMOTE_EXPORT_CSV] = false;

var _default = CONST_VAR;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CONST_VAR, 'CONST_VAR', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Const.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Const.js');
}();

;

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1031);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidgetContainer = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(WidgetContainer, _React$Component);

  function WidgetContainer() {
    (0, _classCallCheck3.default)(this, WidgetContainer);
    return (0, _possibleConstructorReturn3.default)(this, (WidgetContainer.__proto__ || (0, _getPrototypeOf2.default)(WidgetContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(WidgetContainer, [{
    key: 'renderTitle',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function renderTitle() {

      if (!this.props.showTitle) {

        return _react2.default.createElement('div', null);
      }

      if (this.props.renderTitle) {

        return this.props.renderTitle();
      }

      return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement(
          'label',
          null,
          this.props.title
        )
      );
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      if (this.props.dimensions) {

        return _react2.default.Children.map(this.props.children, function (child) {

          var newProps = (0, _assign2.default)({}, child.props, {
            dimensions: _this2.props.dimensions
          });

          return _react2.default.cloneElement(child, newProps);
        });
      }

      return this.props.children;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var classNames = ['widget-container'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      var height = this.props.showTitle ? 'calc(100% - 40px)' : '100%';

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '), style: this.props.style },
        this.renderTitle(),
        _react2.default.createElement(
          'div',
          { className: 'content', style: { height: height } },
          this.renderChildren()
        )
      );
    }
  }]);
  return WidgetContainer;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string,
  showTitle: _propTypes2.default.bool }, _class.defaultProps = {
  showTitle: true,
  className: '' }, _temp);
exports.default = WidgetContainer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "WidgetContainer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1020);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1020, function() {
			var newContent = __webpack_require__(1020);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.16"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(377),
    keys = __webpack_require__(1038);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    isFlattenable = __webpack_require__(1056);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219),
    isArguments = __webpack_require__(220),
    isArray = __webpack_require__(217);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  renderReactSortCaret: function renderReactSortCaret(order) {
    var orderClass = (0, _classnames2.default)('order', {
      'dropup': order === _Const2.default.SORT_ASC
    });
    return _react2.default.createElement(
      'span',
      { className: orderClass },
      _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
    );
  },
  isFunction: function isFunction(obj) {
    return obj && typeof obj === 'function';
  },
  getScrollBarWidth: function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.getBoundingClientRect().width;
    outer.style.overflow = 'scroll';
    var w2 = inner.getBoundingClientRect().width;

    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
  },
  canUseDOM: function canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  },


  // We calculate an offset here in order to properly fetch the indexed data,
  // despite the page start index not always being 1
  getNormalizedPage: function getNormalizedPage(pageStartIndex, page) {
    pageStartIndex = this.getFirstPage(pageStartIndex);
    if (page === undefined) page = pageStartIndex;
    var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
    return page + offset;
  },
  getFirstPage: function getFirstPage(pageStartIndex) {
    return pageStartIndex !== undefined ? pageStartIndex : _Const2.default.PAGE_START_INDEX;
  },
  renderColGroup: function renderColGroup(columns, selectRow) {
    var expandColumnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var selectRowHeader = null;
    var expandRowHeader = null;
    var isSelectRowDefined = selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
    if (isSelectRowDefined) {
      var style = {
        width: selectRow.columnWidth || '30px',
        minWidth: selectRow.columnWidth || '30px'
      };
      if (!selectRow.hideSelectColumn) {
        selectRowHeader = _react2.default.createElement('col', { key: 'select-col', style: style });
      }
    }
    if (expandColumnOptions.expandColumnVisible) {
      var _style = {
        width: expandColumnOptions.columnWidth || 30,
        minWidth: expandColumnOptions.columnWidth || 30
      };
      expandRowHeader = _react2.default.createElement('col', { key: 'expand-col', style: _style });
    }
    var theader = columns.map(function (column, i) {
      var style = {
        display: column.hidden ? 'none' : null
      };
      if (column.width) {
        var width = !isNaN(column.width) ? column.width + 'px' : column.width;
        style.width = width;
        /** add min-wdth to fix user assign column width
        not eq offsetWidth in large column table **/
        style.minWidth = width;
      }
      return _react2.default.createElement('col', { style: style, key: i, className: column.className });
    });

    return _react2.default.createElement(
      'colgroup',
      null,
      expandColumnOptions.expandColumnVisible && expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      selectRowHeader,
      expandColumnOptions.expandColumnVisible && !expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
      theader
    );
  }
}; /* eslint react/display-name: 0 */

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/util.js');
}();

;

/***/ }),

/***/ 1093:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(1093),
    baseCreate = __webpack_require__(385),
    baseForOwn = __webpack_require__(1043),
    baseIteratee = __webpack_require__(1045),
    getPrototype = __webpack_require__(224),
    isArray = __webpack_require__(217),
    isBuffer = __webpack_require__(222),
    isFunction = __webpack_require__(136),
    isObject = __webpack_require__(58),
    isTypedArray = __webpack_require__(223);

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * d3pie
 * @author Ben Keen
 * @version 0.1.9
 * @date June 17th, 2015
 * @repo http://github.com/benkeen/d3pie
 */

// UMD pattern from https://github.com/umdjs/umd/blob/master/returnExports.js
(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports,
    // like Node
    module.exports = factory();
  } else {
    // browser globals (root is window)
    root.d3pie = factory(root);
  }
}(this, function() {

	var _scriptName = "d3pie";
	var _version = "0.1.6";

	// used to uniquely generate IDs and classes, ensuring no conflict between multiple pies on the same page
	var _uniqueIDCounter = 0;


	// this section includes all helper libs on the d3pie object. They're populated via grunt-template. Note: to keep
	// the syntax highlighting from getting all messed up, I commented out each line. That REQUIRES each of the files
	// to have an empty first line. Crumby, yes, but acceptable.
	//// --------- _default-settings.js -----------/**
/**
 * Contains the out-the-box settings for the script. Any of these settings that aren't explicitly overridden for the
 * d3pie instance will inherit from these. This is also included on the main website for use in the generation script.
 */
var defaultSettings = {
	header: {
		title: {
			text:     "",
			color:    "#333333",
			fontSize: 18,
			font:     "arial"
		},
		subtitle: {
			text:     "",
			color:    "#666666",
			fontSize: 14,
			font:     "arial"
		},
		location: "top-center",
		titleSubtitlePadding: 8
	},
	footer: {
		text: 	  "",
		color:    "#666666",
		fontSize: 14,
		font:     "arial",
		location: "left"
	},
	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: "0%",
		pieOuterRadius: null
	},
	data: {
		sortOrder: "none",
		ignoreSmallSegments: {
			enabled: false,
			valueType: "percentage",
			value: null
		},
		smallSegmentGrouping: {
			enabled: false,
			value: 1,
			valueType: "percentage",
			label: "Other",
			color: "#cccccc"
		},
		content: []
	},
	labels: {
		outer: {
			format: "label",
			hideWhenLessThanPercentage: null,
			pieDistance: 30
		},
		inner: {
			format: "percentage",
			hideWhenLessThanPercentage: null
		},
		mainLabel: {
			color: "#333333",
			font: "arial",
			fontSize: 10
		},
		percentage: {
			color: "#dddddd",
			font: "arial",
			fontSize: 10,
			decimalPlaces: 0
		},
		value: {
			color: "#cccc44",
			font: "arial",
			fontSize: 10
		},
		lines: {
			enabled: true,
			style: "curved",
			color: "segment"
		},
		truncation: {
			enabled: false,
			truncateLength: 30
		},
    formatter: null
	},
	effects: {
		load: {
			effect: "default",
			speed: 1000
		},
		pullOutSegmentOnClick: {
			effect: "bounce",
			speed: 300,
			size: 10
		},
		highlightSegmentOnMouseover: true,
		highlightLuminosity: -0.2
	},
	tooltips: {
		enabled: false,
		type: "placeholder", // caption|placeholder
    string: "",
    placeholderParser: null,
		styles: {
      fadeInSpeed: 250,
			backgroundColor: "#000000",
      backgroundOpacity: 0.5,
			color: "#efefef",
      borderRadius: 2,
      font: "arial",
      fontSize: 10,
      padding: 4
		}
	},
	misc: {
		colors: {
			background: null,
			segments: [
				"#2484c1", "#65a620", "#7b6888", "#a05d56", "#961a1a", "#d8d23a", "#e98125", "#d0743c", "#635222", "#6ada6a",
				"#0c6197", "#7d9058", "#207f33", "#44b9b0", "#bca44a", "#e4a14b", "#a3acb2", "#8cc3e9", "#69a6f9", "#5b388f",
				"#546e91", "#8bde95", "#d2ab58", "#273c71", "#98bf6e", "#4daa4b", "#98abc5", "#cc1010", "#31383b", "#006391",
				"#c2643f", "#b0a474", "#a5a39c", "#a9c2bc", "#22af8c", "#7fcecf", "#987ac6", "#3d3b87", "#b77b1c", "#c9c2b6",
				"#807ece", "#8db27c", "#be66a2", "#9ed3c6", "#00644b", "#005064", "#77979f", "#77e079", "#9c73ab", "#1f79a7"
			],
			segmentStroke: "#ffffff"
		},
		gradient: {
			enabled: false,
			percentage: 95,
			color: "#000000"
		},
		canvasPadding: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		pieCenterOffset: {
			x: 0,
			y: 0
		},
		cssPrefix: null
	},
	callbacks: {
		onload: null,
		onMouseoverSegment: null,
		onMouseoutSegment: null,
		onClickSegment: null
	}
};

	//// --------- validate.js -----------
var validate = {

	// called whenever a new pie chart is created
	initialCheck: function(pie) {
		var cssPrefix = pie.cssPrefix;
		var element = pie.element;
		var options = pie.options;

		// confirm d3 is available [check minimum version]
		if (!window.d3 || !window.d3.hasOwnProperty("version")) {
			console.error("d3pie error: d3 is not available");
			return false;
		}

		// confirm element is either a DOM element or a valid string for a DOM element
		if (!(element instanceof HTMLElement || element instanceof SVGElement)) {
			console.error("d3pie error: the first d3pie() param must be a valid DOM element (not jQuery) or a ID string.");
			return false;
		}

		// confirm the CSS prefix is valid. It has to start with a-Z and contain nothing but a-Z0-9_-
		if (!(/[a-zA-Z][a-zA-Z0-9_-]*$/.test(cssPrefix))) {
			console.error("d3pie error: invalid options.misc.cssPrefix");
			return false;
		}

		// confirm some data has been supplied
		if (!helpers.isArray(options.data.content)) {
			console.error("d3pie error: invalid config structure: missing data.content property.");
			return false;
		}
		if (options.data.content.length === 0) {
			console.error("d3pie error: no data supplied.");
			return false;
		}

		// clear out any invalid data. Each data row needs a valid positive number and a label
		var data = [];
		for (var i=0; i<options.data.content.length; i++) {
			if (typeof options.data.content[i].value !== "number" || isNaN(options.data.content[i].value)) {
				console.log("not valid: ", options.data.content[i]);
				continue;
			}
			if (options.data.content[i].value <= 0) {
				console.log("not valid - should have positive value: ", options.data.content[i]);
				continue;
			}
			data.push(options.data.content[i]);
		}
		pie.options.data.content = data;

		// labels.outer.hideWhenLessThanPercentage - 1-100
		// labels.inner.hideWhenLessThanPercentage - 1-100

		return true;
	}
};

	//// --------- helpers.js -----------
var helpers = {

	// creates the SVG element
	addSVGSpace: function(pie) {
		var element = pie.element;
		var canvasWidth = pie.options.size.canvasWidth;
		var canvasHeight = pie.options.size.canvasHeight;
		var backgroundColor = pie.options.misc.colors.background;

		var svg = d3.select(element).append("svg:svg")
			.attr("width", canvasWidth)
			.attr("height", canvasHeight);

		if (backgroundColor !== "transparent") {
			svg.style("background-color", function() { return backgroundColor; });
		}

		return svg;
	},

	whenIdExists: function(id, callback) {
		var inc = 1;
		var giveupIterationCount = 1000;

		var interval = setInterval(function() {
			if (document.getElementById(id)) {
				clearInterval(interval);
				callback();
			}
			if (inc > giveupIterationCount) {
				clearInterval(interval);
			}
			inc++;
		}, 1);
	},

	whenElementsExist: function(els, callback) {
		var inc = 1;
		var giveupIterationCount = 1000;

		var interval = setInterval(function() {
			var allExist = true;
			for (var i=0; i<els.length; i++) {
				if (!document.getElementById(els[i])) {
					allExist = false;
					break;
				}
			}
			if (allExist) {
				clearInterval(interval);
				callback();
			}
			if (inc > giveupIterationCount) {
				clearInterval(interval);
			}
			inc++;
		}, 1);
	},

	shuffleArray: function(array) {
		var currentIndex = array.length, tmpVal, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// and swap it with the current element
			tmpVal = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = tmpVal;
		}
		return array;
	},

	processObj: function(obj, is, value) {
		if (typeof is === 'string') {
			return helpers.processObj(obj, is.split('.'), value);
		} else if (is.length === 1 && value !== undefined) {
            obj[is[0]] = value;
			return obj[is[0]];
		} else if (is.length === 0) {
			return obj;
		} else {
			return helpers.processObj(obj[is[0]], is.slice(1), value);
		}
	},

	getDimensions: function(id) {
		var el = document.getElementById(id);
		var w = 0, h = 0;
		if (el) {
			var dimensions = el.getBBox();
			w = dimensions.width;
			h = dimensions.height;
		} else {
			console.log("error: getDimensions() " + id + " not found.");
		}
		return { w: w, h: h };
	},

	/**
	 * This is based on the SVG coordinate system, where top-left is 0,0 and bottom right is n-n.
	 * @param r1
	 * @param r2
	 * @returns {boolean}
	 */
	rectIntersect: function(r1, r2) {
		var returnVal = (
			// r2.left > r1.right
			(r2.x > (r1.x + r1.w)) ||

			// r2.right < r1.left
			((r2.x + r2.w) < r1.x) ||

			// r2.top < r1.bottom
			((r2.y + r2.h) < r1.y) ||

			// r2.bottom > r1.top
			(r2.y > (r1.y + r1.h))
		);

		return !returnVal;
	},

	/**
	 * Returns a lighter/darker shade of a hex value, based on a luminance value passed.
	 * @param hex a hex color value such as “#abc” or “#123456″ (the hash is optional)
	 * @param lum the luminosity factor: -0.1 is 10% darker, 0.2 is 20% lighter, etc.
	 * @returns {string}
	 */
	getColorShade: function(hex, lum) {

		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;

		// convert to decimal and change luminosity
		var newHex = "#";
		for (var i=0; i<3; i++) {
			var c = parseInt(hex.substr(i * 2, 2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			newHex += ("00" + c).substr(c.length);
		}

		return newHex;
	},

	/**
	 * Users can choose to specify segment colors in three ways (in order of precedence):
	 * 	1. include a "color" attribute for each row in data.content
	 * 	2. include a misc.colors.segments property which contains an array of hex codes
	 * 	3. specify nothing at all and rely on this lib provide some reasonable defaults
	 *
	 * This function sees what's included and populates this.options.colors with whatever's required
	 * for this pie chart.
	 * @param data
	 */
	initSegmentColors: function(pie) {
		var data   = pie.options.data.content;
		var colors = pie.options.misc.colors.segments;

		// TODO this needs a ton of error handling

		var finalColors = [];
		for (var i=0; i<data.length; i++) {
			if (data[i].hasOwnProperty("color")) {
				finalColors.push(data[i].color);
			} else {
				finalColors.push(colors[i]);
			}
		}

		return finalColors;
	},

	applySmallSegmentGrouping: function(data, smallSegmentGrouping) {
		var totalSize;
		if (smallSegmentGrouping.valueType === "percentage") {
			totalSize = math.getTotalPieSize(data);
		}

		// loop through each data item
		var newData = [];
		var groupedData = [];
		var totalGroupedData = 0;
		for (var i=0; i<data.length; i++) {
			if (smallSegmentGrouping.valueType === "percentage") {
				var dataPercent = (data[i].value / totalSize) * 100;
				if (dataPercent <= smallSegmentGrouping.value) {
					groupedData.push(data[i]);
					totalGroupedData += data[i].value;
					continue;
				}
				data[i].isGrouped = false;
				newData.push(data[i]);
			} else {
				if (data[i].value <= smallSegmentGrouping.value) {
					groupedData.push(data[i]);
					totalGroupedData += data[i].value;
					continue;
				}
				data[i].isGrouped = false;
				newData.push(data[i]);
			}
		}

		// we're done! See if there's any small segment groups to add
		if (groupedData.length) {
			newData.push({
				color: smallSegmentGrouping.color,
				label: smallSegmentGrouping.label,
				value: totalGroupedData,
				isGrouped: true,
				groupedData: groupedData
			});
		}

		return newData;
	},

	// for debugging
	showPoint: function(svg, x, y) {
		svg.append("circle").attr("cx", x).attr("cy", y).attr("r", 2).style("fill", "black");
	},

	isFunction: function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	},

	isArray: function(o) {
		return Object.prototype.toString.call(o) === '[object Array]';
	}
};


// taken from jQuery
var extend = function() {
	var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false,
		toString = Object.prototype.toString,
		hasOwn = Object.prototype.hasOwnProperty,
		class2type = {
			"[object Boolean]": "boolean",
			"[object Number]": "number",
			"[object String]": "string",
			"[object Function]": "function",
			"[object Array]": "array",
			"[object Date]": "date",
			"[object RegExp]": "regexp",
			"[object Object]": "object"
		},

		jQuery = {
			isFunction: function (obj) {
				return jQuery.type(obj) === "function";
			},
			isArray: Array.isArray ||
				function (obj) {
					return jQuery.type(obj) === "array";
				},
			isWindow: function (obj) {
				return obj !== null && obj === obj.window;
			},
			isNumeric: function (obj) {
				return !isNaN(parseFloat(obj)) && isFinite(obj);
			},
			type: function (obj) {
				return obj === null ? String(obj) : class2type[toString.call(obj)] || "object";
			},
			isPlainObject: function (obj) {
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {
					return false;
				}
				try {
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					return false;
				}
				var key;
				for (key in obj) {}
				return key === undefined || hasOwn.call(obj, key);
			}
		};
	if (typeof target === "boolean") {
		deep = target;
		target = arguments[1] || {};
		i = 2;
	}
	if (typeof target !== "object" && !jQuery.isFunction(target)) {
		target = {};
	}
	if (length === i) {
		target = this;
		--i;
	}
	for (i; i < length; i++) {
		if ((options = arguments[i]) !== null) {
			for (name in options) {
				src = target[name];
				copy = options[name];
				if (target === copy) {
					continue;
				}
				if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];
					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}
					// WARNING: RECURSION
					target[name] = extend(deep, clone, copy);
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
	return target;
};
	//// --------- math.js -----------
var math = {

	toRadians: function(degrees) {
		return degrees * (Math.PI / 180);
	},

	toDegrees: function(radians) {
		return radians * (180 / Math.PI);
	},

	computePieRadius: function(pie) {
		var size = pie.options.size;
		var canvasPadding = pie.options.misc.canvasPadding;

		// outer radius is either specified (e.g. through the generator), or omitted altogether
		// and calculated based on the canvas dimensions. Right now the estimated version isn't great - it should
		// be possible to calculate it to precisely generate the maximum sized pie, but it's fussy as heck. Something
		// for the next release.

		// first, calculate the default _outerRadius
		var w = size.canvasWidth - canvasPadding.left - canvasPadding.right;
		var h = size.canvasHeight - canvasPadding.top - canvasPadding.bottom;

		// now factor in the footer, title & subtitle
    if (pie.options.header.location !== "pie-center") {
      h -= pie.textComponents.headerHeight;
    }

    if (pie.textComponents.footer.exists) {
      h -= pie.textComponents.footer.h;
    }

		// for really teeny pies, h may be < 0. Adjust it back
		h = (h < 0) ? 0 : h;

		var outerRadius = ((w < h) ? w : h) / 3;
		var innerRadius, percent;

		// if the user specified something, use that instead
		if (size.pieOuterRadius !== null) {
			if (/%/.test(size.pieOuterRadius)) {
				percent = parseInt(size.pieOuterRadius.replace(/[\D]/, ""), 10);
				percent = (percent > 99) ? 99 : percent;
				percent = (percent < 0) ? 0 : percent;

				var smallestDimension = (w < h) ? w : h;

				// now factor in the label line size
				if (pie.options.labels.outer.format !== "none") {
					var pieDistanceSpace = parseInt(pie.options.labels.outer.pieDistance, 10) * 2;
					if (smallestDimension - pieDistanceSpace > 0) {
						smallestDimension -= pieDistanceSpace;
					}
				}

				outerRadius = Math.floor((smallestDimension / 100) * percent) / 2;
			} else {
				outerRadius = parseInt(size.pieOuterRadius, 10);
			}
		}

		// inner radius
		if (/%/.test(size.pieInnerRadius)) {
			percent = parseInt(size.pieInnerRadius.replace(/[\D]/, ""), 10);
			percent = (percent > 99) ? 99 : percent;
			percent = (percent < 0) ? 0 : percent;
			innerRadius = Math.floor((outerRadius / 100) * percent);
		} else {
			innerRadius = parseInt(size.pieInnerRadius, 10);
		}

		pie.innerRadius = innerRadius;
		pie.outerRadius = outerRadius;
	},

	getTotalPieSize: function(data) {
		var totalSize = 0;
		for (var i=0; i<data.length; i++) {
			totalSize += data[i].value;
		}
		return totalSize;
	},

	sortPieData: function(pie) {
		var data                 = pie.options.data.content;
		var sortOrder            = pie.options.data.sortOrder;

		switch (sortOrder) {
			case "none":
				// do nothing
				break;
			case "random":
				data = helpers.shuffleArray(data);
				break;
			case "value-asc":
				data.sort(function(a, b) { return (a.value < b.value) ? -1 : 1; });
				break;
			case "value-desc":
				data.sort(function(a, b) { return (a.value < b.value) ? 1 : -1; });
				break;
			case "label-asc":
				data.sort(function(a, b) { return (a.label.toLowerCase() > b.label.toLowerCase()) ? 1 : -1; });
				break;
			case "label-desc":
				data.sort(function(a, b) { return (a.label.toLowerCase() < b.label.toLowerCase()) ? 1 : -1; });
				break;
		}

		return data;
	},

	

	// var pieCenter = math.getPieCenter();
	getPieTranslateCenter: function(pieCenter) {
		return "translate(" + pieCenter.x + "," + pieCenter.y + ")";
	},

	/**
	 * Used to determine where on the canvas the center of the pie chart should be. It takes into account the
	 * height and position of the title, subtitle and footer, and the various paddings.
	 * @private
	 */
	calculatePieCenter: function(pie) {
		var pieCenterOffset = pie.options.misc.pieCenterOffset;
		var hasTopTitle    = (pie.textComponents.title.exists && pie.options.header.location !== "pie-center");
		var hasTopSubtitle = (pie.textComponents.subtitle.exists && pie.options.header.location !== "pie-center");

		var headerOffset = pie.options.misc.canvasPadding.top;
		if (hasTopTitle && hasTopSubtitle) {
			headerOffset += pie.textComponents.title.h + pie.options.header.titleSubtitlePadding + pie.textComponents.subtitle.h;
		} else if (hasTopTitle) {
			headerOffset += pie.textComponents.title.h;
		} else if (hasTopSubtitle) {
			headerOffset += pie.textComponents.subtitle.h;
		}

		var footerOffset = 0;
		if (pie.textComponents.footer.exists) {
			footerOffset = pie.textComponents.footer.h + pie.options.misc.canvasPadding.bottom;
		}

		var x = ((pie.options.size.canvasWidth - pie.options.misc.canvasPadding.left - pie.options.misc.canvasPadding.right) / 2) + pie.options.misc.canvasPadding.left;
		var y = ((pie.options.size.canvasHeight - footerOffset - headerOffset) / 2) + headerOffset;

		x += pieCenterOffset.x;
		y += pieCenterOffset.y;

		pie.pieCenter = { x: x, y: y };
	},


	/**
	 * Rotates a point (x, y) around an axis (xm, ym) by degrees (a).
	 * @param x
	 * @param y
	 * @param xm
	 * @param ym
	 * @param a angle in degrees
	 * @returns {Array}
	 */
	rotate: function(x, y, xm, ym, a) {

        a = a * Math.PI / 180; // convert to radians

        var cos = Math.cos,
			sin = Math.sin,
		// subtract midpoints, so that midpoint is translated to origin and add it in the end again
		xr = (x - xm) * cos(a) - (y - ym) * sin(a) + xm,
		yr = (x - xm) * sin(a) + (y - ym) * cos(a) + ym;

		return { x: xr, y: yr };
	},

	/**
	 * Translates a point x, y by distance d, and by angle a.
	 * @param x
	 * @param y
	 * @param dist
	 * @param a angle in degrees
	 */
	translate: function(x, y, d, a) {
		var rads = math.toRadians(a);
		return {
			x: x + d * Math.sin(rads),
			y: y - d * Math.cos(rads)
		};
	},

	// from: http://stackoverflow.com/questions/19792552/d3-put-arc-labels-in-a-pie-chart-if-there-is-enough-space
	pointIsInArc: function(pt, ptData, d3Arc) {
		// Center of the arc is assumed to be 0,0
		// (pt.x, pt.y) are assumed to be relative to the center
		var r1 = d3Arc.innerRadius()(ptData), // Note: Using the innerRadius
			r2 = d3Arc.outerRadius()(ptData),
			theta1 = d3Arc.startAngle()(ptData),
			theta2 = d3Arc.endAngle()(ptData);

		var dist = pt.x * pt.x + pt.y * pt.y,
			angle = Math.atan2(pt.x, -pt.y); // Note: different coordinate system

		angle = (angle < 0) ? (angle + Math.PI * 2) : angle;

		return (r1 * r1 <= dist) && (dist <= r2 * r2) &&
			(theta1 <= angle) && (angle <= theta2);
	}
};

	//// --------- labels.js -----------
var labels = {

	/**
	 * Adds the labels to the pie chart, but doesn't position them. There are two locations for the
	 * labels: inside (center) of the segments, or outside the segments on the edge.
	 * @param section "inner" or "outer"
	 * @param sectionDisplayType "percentage", "value", "label", "label-value1", etc.
	 * @param pie
	 */
	add: function(pie, section, sectionDisplayType) {
		var include = labels.getIncludes(sectionDisplayType);
		var settings = pie.options.labels;

		// group the label groups (label, percentage, value) into a single element for simpler positioning
		var outerLabel = pie.svg.insert("g", "." + pie.cssPrefix + "labels-" + section)
			.attr("class", pie.cssPrefix + "labels-" + section);

		var labelGroup = outerLabel.selectAll("." + pie.cssPrefix + "labelGroup-" + section)
			.data(pie.options.data.content)
			.enter()
			.append("g")
			.attr("id", function(d, i) { return pie.cssPrefix + "labelGroup" + i + "-" + section; })
			.attr("data-index", function(d, i) { return i; })
			.attr("class", pie.cssPrefix + "labelGroup-" + section)
			.style("opacity", 0);

    var formatterContext = { section: section, sectionDisplayType: sectionDisplayType };

		// 1. Add the main label
		if (include.mainLabel) {
			labelGroup.append("text")
				.attr("id", function(d, i) { return pie.cssPrefix + "segmentMainLabel" + i + "-" + section; })
				.attr("class", pie.cssPrefix + "segmentMainLabel-" + section)
				.text(function(d, i) {
					var str = d.label;

          // if a custom formatter has been defined, pass it the raw label string - it can do whatever it wants with it.
          // we only apply truncation if it's not defined
					if (settings.formatter) {
            formatterContext.index = i;
            formatterContext.part = 'mainLabel';
            formatterContext.value = d.value;
            formatterContext.label = str;
            str = settings.formatter(formatterContext);
          } else if (settings.truncation.enabled && d.label.length > settings.truncation.truncateLength) {
            str = d.label.substring(0, settings.truncation.truncateLength) + "...";
          }
          return str;
				})
				.style("font-size", settings.mainLabel.fontSize + "px")
				.style("font-family", settings.mainLabel.font)
				.style("fill", settings.mainLabel.color);
		}

		// 2. Add the percentage label
		if (include.percentage) {
			labelGroup.append("text")
				.attr("id", function(d, i) { return pie.cssPrefix + "segmentPercentage" + i + "-" + section; })
				.attr("class", pie.cssPrefix + "segmentPercentage-" + section)
				.text(function(d, i) {
					var percentage = segments.getPercentage(pie, i, pie.options.labels.percentage.decimalPlaces);
          if (settings.formatter) {
            formatterContext.index = i;
            formatterContext.part = "percentage";
            formatterContext.value = d.value;
            formatterContext.label = percentage;
            percentage = settings.formatter(formatterContext);
          } else {
            percentage += "%";
          }
          return percentage;
				})
				.style("font-size", settings.percentage.fontSize + "px")
				.style("font-family", settings.percentage.font)
				.style("fill", settings.percentage.color);
		}

		// 3. Add the value label
		if (include.value) {
			labelGroup.append("text")
				.attr("id", function(d, i) { return pie.cssPrefix +  "segmentValue" + i + "-" + section; })
				.attr("class", pie.cssPrefix + "segmentValue-" + section)
				.text(function(d, i) {
          formatterContext.index = i;
          formatterContext.part = "value";
          formatterContext.value = d.value;
          formatterContext.label = d.value;
          return settings.formatter ? settings.formatter(formatterContext, d.value) : d.value;
        })
				.style("font-size", settings.value.fontSize + "px")
				.style("font-family", settings.value.font)
				.style("fill", settings.value.color);
		}
	},

	/**
	 * @param section "inner" / "outer"
	 */
	positionLabelElements: function(pie, section, sectionDisplayType) {
		labels["dimensions-" + section] = [];

		// get the latest widths, heights
		var labelGroups = d3.selectAll("." + pie.cssPrefix + "labelGroup-" + section);
		labelGroups.each(function(d, i) {
			var mainLabel  = d3.select(this).selectAll("." + pie.cssPrefix + "segmentMainLabel-" + section);
			var percentage = d3.select(this).selectAll("." + pie.cssPrefix + "segmentPercentage-" + section);
			var value      = d3.select(this).selectAll("." + pie.cssPrefix + "segmentValue-" + section);

			labels["dimensions-" + section].push({
				mainLabel:  (mainLabel.node() !== null) ? mainLabel.node().getBBox() : null,
				percentage: (percentage.node() !== null) ? percentage.node().getBBox() : null,
				value:      (value.node() !== null) ? value.node().getBBox() : null
			});
		});

		var singleLinePad = 5;
		var dims = labels["dimensions-" + section];
		switch (sectionDisplayType) {
			case "label-value1":
				d3.selectAll("." + pie.cssPrefix + "segmentValue-" + section)
					.attr("dx", function(d, i) { return dims[i].mainLabel.width + singleLinePad; });
				break;
			case "label-value2":
				d3.selectAll("." + pie.cssPrefix + "segmentValue-" + section)
					.attr("dy", function(d, i) { return dims[i].mainLabel.height; });
				break;
			case "label-percentage1":
				d3.selectAll("." + pie.cssPrefix + "segmentPercentage-" + section)
					.attr("dx", function(d, i) { return dims[i].mainLabel.width + singleLinePad; });
				break;
			case "label-percentage2":
				d3.selectAll("." + pie.cssPrefix + "segmentPercentage-" + section)
					.attr("dx", function(d, i) { return (dims[i].mainLabel.width / 2) - (dims[i].percentage.width / 2); })
					.attr("dy", function(d, i) { return dims[i].mainLabel.height; });
				break;
	 	}
	},

	computeLabelLinePositions: function(pie) {
		pie.lineCoordGroups = [];
		d3.selectAll("." + pie.cssPrefix + "labelGroup-outer")
			.each(function(d, i) { return labels.computeLinePosition(pie, i); });
	},

	computeLinePosition: function(pie, i) {
		var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });
		var originCoords = math.rotate(pie.pieCenter.x, pie.pieCenter.y - pie.outerRadius, pie.pieCenter.x, pie.pieCenter.y, angle);
		var heightOffset = pie.outerLabelGroupData[i].h / 5; // TODO check
		var labelXMargin = 6; // the x-distance of the label from the end of the line [TODO configurable]

		var quarter = Math.floor(angle / 90);
		var midPoint = 4;
		var x2, y2, x3, y3;

		// this resolves an issue when the
		if (quarter === 2 && angle === 180) {
			quarter = 1;
		}

		switch (quarter) {
			case 0:
				x2 = pie.outerLabelGroupData[i].x - labelXMargin - ((pie.outerLabelGroupData[i].x - labelXMargin - originCoords.x) / 2);
				y2 = pie.outerLabelGroupData[i].y + ((originCoords.y - pie.outerLabelGroupData[i].y) / midPoint);
				x3 = pie.outerLabelGroupData[i].x - labelXMargin;
				y3 = pie.outerLabelGroupData[i].y - heightOffset;
				break;
			case 1:
				x2 = originCoords.x + (pie.outerLabelGroupData[i].x - originCoords.x) / midPoint;
				y2 = originCoords.y + (pie.outerLabelGroupData[i].y - originCoords.y) / midPoint;
				x3 = pie.outerLabelGroupData[i].x - labelXMargin;
				y3 = pie.outerLabelGroupData[i].y - heightOffset;
				break;
			case 2:
				var startOfLabelX = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
				x2 = originCoords.x - (originCoords.x - startOfLabelX) / midPoint;
				y2 = originCoords.y + (pie.outerLabelGroupData[i].y - originCoords.y) / midPoint;
				x3 = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
				y3 = pie.outerLabelGroupData[i].y - heightOffset;
				break;
			case 3:
				var startOfLabel = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
				x2 = startOfLabel + ((originCoords.x - startOfLabel) / midPoint);
				y2 = pie.outerLabelGroupData[i].y + (originCoords.y - pie.outerLabelGroupData[i].y) / midPoint;
				x3 = pie.outerLabelGroupData[i].x + pie.outerLabelGroupData[i].w + labelXMargin;
				y3 = pie.outerLabelGroupData[i].y - heightOffset;
				break;
		}

		/*
		 * x1 / y1: the x/y coords of the start of the line, at the mid point of the segments arc on the pie circumference
		 * x2 / y2: if "curved" line style is being used, this is the midpoint of the line. Other
		 * x3 / y3: the end of the line; closest point to the label
		 */
		if (pie.options.labels.lines.style === "straight") {
			pie.lineCoordGroups[i] = [
				{ x: originCoords.x, y: originCoords.y },
				{ x: x3, y: y3 }
			];
		} else {
			pie.lineCoordGroups[i] = [
				{ x: originCoords.x, y: originCoords.y },
				{ x: x2, y: y2 },
				{ x: x3, y: y3 }
			];
		}
	},

	addLabelLines: function(pie) {
		var lineGroups = pie.svg.insert("g", "." + pie.cssPrefix + "pieChart") // meaning, BEFORE .pieChart
			.attr("class", pie.cssPrefix + "lineGroups")
			.style("opacity", 0);

		var lineGroup = lineGroups.selectAll("." + pie.cssPrefix + "lineGroup")
			.data(pie.lineCoordGroups)
			.enter()
			.append("g")
			.attr("class", pie.cssPrefix + "lineGroup");

		var lineFunction = d3.svg.line()
			.interpolate("basis")
			.x(function(d) { return d.x; })
			.y(function(d) { return d.y; });

		lineGroup.append("path")
			.attr("d", lineFunction)
			.attr("stroke", function(d, i) {
				return (pie.options.labels.lines.color === "segment") ? pie.options.colors[i] : pie.options.labels.lines.color;
			})
			.attr("stroke-width", 1)
			.attr("fill", "none")
			.style("opacity", function(d, i) {
				var percentage = pie.options.labels.outer.hideWhenLessThanPercentage;
				var segmentPercentage = segments.getPercentage(pie, i, pie.options.labels.percentage.decimalPlaces);
				var isHidden = (percentage !== null && segmentPercentage < percentage) || pie.options.data.content[i].label === "";
				return isHidden ? 0 : 1;
			});
	},

	positionLabelGroups: function(pie, section) {
    if (pie.options.labels[section].format === "none") {
      return;
    }

		d3.selectAll("." + pie.cssPrefix + "labelGroup-" + section)
			.style("opacity", 0)
			.attr("transform", function(d, i) {
				var x, y;
				if (section === "outer") {
					x = pie.outerLabelGroupData[i].x;
					y = pie.outerLabelGroupData[i].y;
				} else {
					var pieCenterCopy = extend(true, {}, pie.pieCenter);

					// now recompute the "center" based on the current _innerRadius
					if (pie.innerRadius > 0) {
						var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });
						var newCoords = math.translate(pie.pieCenter.x, pie.pieCenter.y, pie.innerRadius, angle);
						pieCenterCopy.x = newCoords.x;
						pieCenterCopy.y = newCoords.y;
					}

					var dims = helpers.getDimensions(pie.cssPrefix + "labelGroup" + i + "-inner");
					var xOffset = dims.w / 2;
					var yOffset = dims.h / 4; // confusing! Why 4? should be 2, but it doesn't look right

					x = pieCenterCopy.x + (pie.lineCoordGroups[i][0].x - pieCenterCopy.x) / 1.8;
					y = pieCenterCopy.y + (pie.lineCoordGroups[i][0].y - pieCenterCopy.y) / 1.8;

					x = x - xOffset;
					y = y + yOffset;
				}

				return "translate(" + x + "," + y + ")";
			});
	},


	fadeInLabelsAndLines: function(pie) {

		// fade in the labels when the load effect is complete - or immediately if there's no load effect
		var loadSpeed = (pie.options.effects.load.effect === "default") ? pie.options.effects.load.speed : 1;
		setTimeout(function() {
			var labelFadeInTime = (pie.options.effects.load.effect === "default") ? 400 : 1; // 400 is hardcoded for the present

			d3.selectAll("." + pie.cssPrefix + "labelGroup-outer")
				.transition()
				.duration(labelFadeInTime)
				.style("opacity", function(d, i) {
					var percentage = pie.options.labels.outer.hideWhenLessThanPercentage;
					var segmentPercentage = segments.getPercentage(pie, i, pie.options.labels.percentage.decimalPlaces);
					return (percentage !== null && segmentPercentage < percentage) ? 0 : 1;
				});

			d3.selectAll("." + pie.cssPrefix + "labelGroup-inner")
				.transition()
				.duration(labelFadeInTime)
				.style("opacity", function(d, i) {
					var percentage = pie.options.labels.inner.hideWhenLessThanPercentage;
					var segmentPercentage = segments.getPercentage(pie, i, pie.options.labels.percentage.decimalPlaces);
					return (percentage !== null && segmentPercentage < percentage) ? 0 : 1;
				});

			d3.selectAll("g." + pie.cssPrefix + "lineGroups")
				.transition()
				.duration(labelFadeInTime)
				.style("opacity", 1);

			// once everything's done loading, trigger the onload callback if defined
			if (helpers.isFunction(pie.options.callbacks.onload)) {
				setTimeout(function() {
					try {
						pie.options.callbacks.onload();
					} catch (e) { }
				}, labelFadeInTime);
			}
		}, loadSpeed);
	},

	getIncludes: function(val) {
		var addMainLabel  = false;
		var addValue      = false;
		var addPercentage = false;

		switch (val) {
			case "label":
				addMainLabel = true;
				break;
			case "value":
				addValue = true;
				break;
			case "percentage":
				addPercentage = true;
				break;
			case "label-value1":
			case "label-value2":
				addMainLabel = true;
				addValue = true;
				break;
			case "label-percentage1":
			case "label-percentage2":
				addMainLabel = true;
				addPercentage = true;
				break;
		}
		return {
			mainLabel: addMainLabel,
			value: addValue,
			percentage: addPercentage
		};
	},


	/**
	 * This does the heavy-lifting to compute the actual coordinates for the outer label groups. It does two things:
	 * 1. Make a first pass and position them in the ideal positions, based on the pie sizes
	 * 2. Do some basic collision avoidance.
	 */
	computeOuterLabelCoords: function(pie) {

		// 1. figure out the ideal positions for the outer labels
		pie.svg.selectAll("." + pie.cssPrefix + "labelGroup-outer")
			.each(function(d, i) {
				return labels.getIdealOuterLabelPositions(pie, i);
			});

		// 2. now adjust those positions to try to accommodate conflicts
		labels.resolveOuterLabelCollisions(pie);
	},

	/**
	 * This attempts to resolve label positioning collisions.
	 */
	resolveOuterLabelCollisions: function(pie) {
    if (pie.options.labels.outer.format === "none") {
      return;
    }

		var size = pie.options.data.content.length;
		labels.checkConflict(pie, 0, "clockwise", size);
		labels.checkConflict(pie, size-1, "anticlockwise", size);
	},

	checkConflict: function(pie, currIndex, direction, size) {
    var i, curr;

		if (size <= 1) {
			return;
		}

		var currIndexHemisphere = pie.outerLabelGroupData[currIndex].hs;
		if (direction === "clockwise" && currIndexHemisphere !== "right") {
			return;
		}
		if (direction === "anticlockwise" && currIndexHemisphere !== "left") {
			return;
		}
		var nextIndex = (direction === "clockwise") ? currIndex+1 : currIndex-1;

		// this is the current label group being looked at. We KNOW it's positioned properly (the first item
		// is always correct)
		var currLabelGroup = pie.outerLabelGroupData[currIndex];

		// this one we don't know about. That's the one we're going to look at and move if necessary
		var examinedLabelGroup = pie.outerLabelGroupData[nextIndex];

		var info = {
			labelHeights: pie.outerLabelGroupData[0].h,
			center: pie.pieCenter,
			lineLength: (pie.outerRadius + pie.options.labels.outer.pieDistance),
			heightChange: pie.outerLabelGroupData[0].h + 1 // 1 = padding
		};

		// loop through *ALL* label groups examined so far to check for conflicts. This is because when they're
		// very tightly fitted, a later label group may still appear high up on the page
		if (direction === "clockwise") {
      i = 0;
			for (; i<=currIndex; i++) {
				curr = pie.outerLabelGroupData[i];

				// if there's a conflict with this label group, shift the label to be AFTER the last known
				// one that's been properly placed
				if (helpers.rectIntersect(curr, examinedLabelGroup)) {
					labels.adjustLabelPos(pie, nextIndex, currLabelGroup, info);
					break;
				}
			}
		} else {
      i = size - 1;
			for (; i >= currIndex; i--) {
				curr = pie.outerLabelGroupData[i];

				// if there's a conflict with this label group, shift the label to be AFTER the last known
				// one that's been properly placed
				if (helpers.rectIntersect(curr, examinedLabelGroup)) {
					labels.adjustLabelPos(pie, nextIndex, currLabelGroup, info);
					break;
				}
			}
		}
		labels.checkConflict(pie, nextIndex, direction, size);
	},

	// does a little math to shift a label into a new position based on the last properly placed one
	adjustLabelPos: function(pie, nextIndex, lastCorrectlyPositionedLabel, info) {
		var xDiff, yDiff, newXPos, newYPos;
		newYPos = lastCorrectlyPositionedLabel.y + info.heightChange;
		yDiff = info.center.y - newYPos;

		if (Math.abs(info.lineLength) > Math.abs(yDiff)) {
			xDiff = Math.sqrt((info.lineLength * info.lineLength) - (yDiff * yDiff));
		} else {
			xDiff = Math.sqrt((yDiff * yDiff) - (info.lineLength * info.lineLength));
		}

		if (lastCorrectlyPositionedLabel.hs === "right") {
			newXPos = info.center.x + xDiff;
		} else {
			newXPos = info.center.x - xDiff - pie.outerLabelGroupData[nextIndex].w;
		}

		pie.outerLabelGroupData[nextIndex].x = newXPos;
		pie.outerLabelGroupData[nextIndex].y = newYPos;
	},

	/**
	 * @param i 0-N where N is the dataset size - 1.
	 */
	getIdealOuterLabelPositions: function(pie, i) {
    var labelGroupNode = d3.select("#" + pie.cssPrefix + "labelGroup" + i + "-outer").node();
    if (!labelGroupNode) {
      return;
    }
    var labelGroupDims = labelGroupNode.getBBox();
		var angle = segments.getSegmentAngle(i, pie.options.data.content, pie.totalSize, { midpoint: true });

		var originalX = pie.pieCenter.x;
		var originalY = pie.pieCenter.y - (pie.outerRadius + pie.options.labels.outer.pieDistance);
		var newCoords = math.rotate(originalX, originalY, pie.pieCenter.x, pie.pieCenter.y, angle);

		// if the label is on the left half of the pie, adjust the values
		var hemisphere = "right"; // hemisphere
		if (angle > 180) {
			newCoords.x -= (labelGroupDims.width + 8);
			hemisphere = "left";
		} else {
			newCoords.x += 8;
		}

		pie.outerLabelGroupData[i] = {
			x: newCoords.x,
			y: newCoords.y,
			w: labelGroupDims.width,
			h: labelGroupDims.height,
			hs: hemisphere
		};
	}
};

	//// --------- segments.js -----------
var segments = {

	/**
	 * Creates the pie chart segments and displays them according to the desired load effect.
	 * @private
	 */
	create: function(pie) {
		var pieCenter = pie.pieCenter;
		var colors = pie.options.colors;
		var loadEffects = pie.options.effects.load;
		var segmentStroke = pie.options.misc.colors.segmentStroke;

		// we insert the pie chart BEFORE the title, to ensure the title overlaps the pie
		var pieChartElement = pie.svg.insert("g", "#" + pie.cssPrefix + "title")
			.attr("transform", function() { return math.getPieTranslateCenter(pieCenter); })
			.attr("class", pie.cssPrefix + "pieChart");

		var arc = d3.svg.arc()
			.innerRadius(pie.innerRadius)
			.outerRadius(pie.outerRadius)
			.startAngle(0)
			.endAngle(function(d) {
				return (d.value / pie.totalSize) * 2 * Math.PI;
			});

		var g = pieChartElement.selectAll("." + pie.cssPrefix + "arc")
			.data(pie.options.data.content)
			.enter()
			.append("g")
			.attr("class", pie.cssPrefix + "arc");

		// if we're not fading in the pie, just set the load speed to 0
		var loadSpeed = loadEffects.speed;
		if (loadEffects.effect === "none") {
			loadSpeed = 0;
		}

		g.append("path")
			.attr("id", function(d, i) { return pie.cssPrefix + "segment" + i; })
			.attr("fill", function(d, i) {
				var color = colors[i];
				if (pie.options.misc.gradient.enabled) {
					color = "url(#" + pie.cssPrefix + "grad" + i + ")";
				}
				return color;
			})
			.style("stroke", segmentStroke)
			.style("stroke-width", 1)
			.transition()
			.ease("cubic-in-out")
			.duration(loadSpeed)
			.attr("data-index", function(d, i) { return i; })
			.attrTween("d", function(b) {
				var i = d3.interpolate({ value: 0 }, b);
				return function(t) {
					return pie.arc(i(t));
				};
			});

		pie.svg.selectAll("g." + pie.cssPrefix + "arc")
			.attr("transform",
			function(d, i) {
				var angle = 0;
				if (i > 0) {
					angle = segments.getSegmentAngle(i-1, pie.options.data.content, pie.totalSize);
				}
				return "rotate(" + angle + ")";
			}
		);
		pie.arc = arc;
	},

	addGradients: function(pie) {
		var grads = pie.svg.append("defs")
			.selectAll("radialGradient")
			.data(pie.options.data.content)
			.enter().append("radialGradient")
			.attr("gradientUnits", "userSpaceOnUse")
			.attr("cx", 0)
			.attr("cy", 0)
			.attr("r", "120%")
			.attr("id", function(d, i) { return pie.cssPrefix + "grad" + i; });

		grads.append("stop").attr("offset", "0%").style("stop-color", function(d, i) { return pie.options.colors[i]; });
		grads.append("stop").attr("offset", pie.options.misc.gradient.percentage + "%").style("stop-color", pie.options.misc.gradient.color);
	},

	addSegmentEventHandlers: function(pie) {
		var arc = d3.selectAll("." + pie.cssPrefix + "arc,." + pie.cssPrefix + "labelGroup-inner,." + pie.cssPrefix + "labelGroup-outer");

		arc.on("click", function() {
			var currentEl = d3.select(this);
			var segment;

			// mouseover works on both the segments AND the segment labels, hence the following
			if (currentEl.attr("class") === pie.cssPrefix + "arc") {
				segment = currentEl.select("path");
			} else {
				var index = currentEl.attr("data-index");
				segment = d3.select("#" + pie.cssPrefix + "segment" + index);
			}
			var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
			segments.onSegmentEvent(pie, pie.options.callbacks.onClickSegment, segment, isExpanded);
			if (pie.options.effects.pullOutSegmentOnClick.effect !== "none") {
				if (isExpanded) {
					segments.closeSegment(pie, segment.node());
				} else {
					segments.openSegment(pie, segment.node());
				}
			}
		});

		arc.on("mouseover", function() {
			var currentEl = d3.select(this);
			var segment, index;

			if (currentEl.attr("class") === pie.cssPrefix + "arc") {
				segment = currentEl.select("path");
			} else {
				index = currentEl.attr("data-index");
				segment = d3.select("#" + pie.cssPrefix + "segment" + index);
			}

			if (pie.options.effects.highlightSegmentOnMouseover) {
				index = segment.attr("data-index");
				var segColor = pie.options.colors[index];
				segment.style("fill", helpers.getColorShade(segColor, pie.options.effects.highlightLuminosity));
			}

      if (pie.options.tooltips.enabled) {
        index = segment.attr("data-index");
        tt.showTooltip(pie, index);
      }

			var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
			segments.onSegmentEvent(pie, pie.options.callbacks.onMouseoverSegment, segment, isExpanded);
		});

    arc.on("mousemove", function() {
      tt.moveTooltip(pie);
    });

		arc.on("mouseout", function() {
			var currentEl = d3.select(this);
			var segment, index;

			if (currentEl.attr("class") === pie.cssPrefix + "arc") {
				segment = currentEl.select("path");
			} else {
				index = currentEl.attr("data-index");
				segment = d3.select("#" + pie.cssPrefix + "segment" + index);
			}

			if (pie.options.effects.highlightSegmentOnMouseover) {
				index = segment.attr("data-index");
				var color = pie.options.colors[index];
				if (pie.options.misc.gradient.enabled) {
					color = "url(#" + pie.cssPrefix + "grad" + index + ")";
				}
				segment.style("fill", color);
			}

      if (pie.options.tooltips.enabled) {
        index = segment.attr("data-index");
        tt.hideTooltip(pie, index);
      }

			var isExpanded = segment.attr("class") === pie.cssPrefix + "expanded";
			segments.onSegmentEvent(pie, pie.options.callbacks.onMouseoutSegment, segment, isExpanded);
		});
	},

	// helper function used to call the click, mouseover, mouseout segment callback functions
	onSegmentEvent: function(pie, func, segment, isExpanded) {
		if (!helpers.isFunction(func)) {
			return;
		}
		var index = parseInt(segment.attr("data-index"), 10);
		func({
			segment: segment.node(),
			index: index,
			expanded: isExpanded,
			data: pie.options.data.content[index]
		});
	},

	openSegment: function(pie, segment) {
		if (pie.isOpeningSegment) {
			return;
		}
		pie.isOpeningSegment = true;

		// close any open segments
		if (d3.selectAll("." + pie.cssPrefix + "expanded").length > 0) {
			segments.closeSegment(pie, d3.select("." + pie.cssPrefix + "expanded").node());
		}

		d3.select(segment).transition()
			.ease(pie.options.effects.pullOutSegmentOnClick.effect)
			.duration(pie.options.effects.pullOutSegmentOnClick.speed)
			.attr("transform", function(d, i) {
				var c = pie.arc.centroid(d),
					x = c[0],
					y = c[1],
					h = Math.sqrt(x*x + y*y),
					pullOutSize = parseInt(pie.options.effects.pullOutSegmentOnClick.size, 10);

				return "translate(" + ((x/h) * pullOutSize) + ',' + ((y/h) * pullOutSize) + ")";
			})
			.each("end", function(d, i) {
				pie.currentlyOpenSegment = segment;
				pie.isOpeningSegment = false;
				d3.select(this).attr("class", pie.cssPrefix + "expanded");
			});
	},

	closeSegment: function(pie, segment) {
		d3.select(segment).transition()
			.duration(400)
			.attr("transform", "translate(0,0)")
			.each("end", function(d, i) {
				d3.select(this).attr("class", "");
				pie.currentlyOpenSegment = null;
			});
	},

	getCentroid: function(el) {
		var bbox = el.getBBox();
		return {
			x: bbox.x + bbox.width / 2,
			y: bbox.y + bbox.height / 2
		};
	},

	/**
	 * General helper function to return a segment's angle, in various different ways.
	 * @param index
	 * @param opts optional object for fine-tuning exactly what you want.
	 */
	getSegmentAngle: function(index, data, totalSize, opts) {
		var options = extend({
			// if true, this returns the full angle from the origin. Otherwise it returns the single segment angle
			compounded: true,

			// optionally returns the midpoint of the angle instead of the full angle
			midpoint: false
		}, opts);

		var currValue = data[index].value;
		var fullValue;
		if (options.compounded) {
			fullValue = 0;

			// get all values up to and including the specified index
			for (var i=0; i<=index; i++) {
				fullValue += data[i].value;
			}
		}

		if (typeof fullValue === 'undefined') {
			fullValue = currValue;
		}

		// now convert the full value to an angle
		var angle = (fullValue / totalSize) * 360;

		// lastly, if we want the midpoint, factor that sucker in
		if (options.midpoint) {
			var currAngle = (currValue / totalSize) * 360;
			angle -= (currAngle / 2);
		}

		return angle;
	},

	getPercentage: function(pie, index, decimalPlaces) {
		var relativeAmount = pie.options.data.content[index].value / pie.totalSize;
		if (decimalPlaces <= 0) {
			return Math.round(relativeAmount * 100);
		} else {
			return (relativeAmount * 100).toFixed(decimalPlaces);
		}
	}

};

	//// --------- text.js -----------
var text = {
	offscreenCoord: -10000,

	addTitle: function(pie) {
		var title = pie.svg.selectAll("." + pie.cssPrefix + "title")
			.data([pie.options.header.title])
			.enter()
			.append("text")
			.text(function(d) { return d.text; })
			.attr({
        id: pie.cssPrefix + "title",
        class: pie.cssPrefix + "title",
        x: text.offscreenCoord,
        y: text.offscreenCoord
      })
			.attr("text-anchor", function() {
				var location;
				if (pie.options.header.location === "top-center" || pie.options.header.location === "pie-center") {
					location = "middle";
				} else {
					location = "left";
				}
				return location;
			})
			.attr("fill", function(d) { return d.color; })
			.style("font-size", function(d) { return d.fontSize + "px"; })
			.style("font-family", function(d) { return d.font; });
	},

	positionTitle: function(pie) {
		var textComponents = pie.textComponents;
		var headerLocation = pie.options.header.location;
		var canvasPadding = pie.options.misc.canvasPadding;
		var canvasWidth = pie.options.size.canvasWidth;
		var titleSubtitlePadding = pie.options.header.titleSubtitlePadding;

		var x;
		if (headerLocation === "top-left") {
			x = canvasPadding.left;
		} else {
			x = ((canvasWidth - canvasPadding.right) / 2) + canvasPadding.left;
		}

    // add whatever offset has been added by user
    x += pie.options.misc.pieCenterOffset.x;

		var y = canvasPadding.top + textComponents.title.h;

		if (headerLocation === "pie-center") {
			y = pie.pieCenter.y;

			// still not fully correct
			if (textComponents.subtitle.exists) {
				var totalTitleHeight = textComponents.title.h + titleSubtitlePadding + textComponents.subtitle.h;
				y = y - (totalTitleHeight / 2) + textComponents.title.h;
			} else {
				y += (textComponents.title.h / 4);
			}
		}

		pie.svg.select("#" + pie.cssPrefix + "title")
			.attr("x", x)
			.attr("y", y);
	},

	addSubtitle: function(pie) {
		var headerLocation = pie.options.header.location;

		pie.svg.selectAll("." + pie.cssPrefix + "subtitle")
			.data([pie.options.header.subtitle])
			.enter()
			.append("text")
			.text(function(d) { return d.text; })
			.attr("x", text.offscreenCoord)
			.attr("y", text.offscreenCoord)
			.attr("id", pie.cssPrefix + "subtitle")
			.attr("class", pie.cssPrefix + "subtitle")
			.attr("text-anchor", function() {
				var location;
				if (headerLocation === "top-center" || headerLocation === "pie-center") {
					location = "middle";
				} else {
					location = "left";
				}
				return location;
			})
			.attr("fill", function(d) { return d.color; })
			.style("font-size", function(d) { return d.fontSize + "px"; })
			.style("font-family", function(d) { return d.font; });
	},

	positionSubtitle: function(pie) {
		var canvasPadding = pie.options.misc.canvasPadding;
		var canvasWidth = pie.options.size.canvasWidth;

		var x;
		if (pie.options.header.location === "top-left") {
			x = canvasPadding.left;
		} else {
			x = ((canvasWidth - canvasPadding.right) / 2) + canvasPadding.left;
		}

    // add whatever offset has been added by user
    x += pie.options.misc.pieCenterOffset.x;

		var y = text.getHeaderHeight(pie);
		pie.svg.select("#" + pie.cssPrefix + "subtitle")
			.attr("x", x)
			.attr("y", y);
	},

	addFooter: function(pie) {
		pie.svg.selectAll("." + pie.cssPrefix + "footer")
			.data([pie.options.footer])
			.enter()
			.append("text")
			.text(function(d) { return d.text; })
			.attr("x", text.offscreenCoord)
			.attr("y", text.offscreenCoord)
			.attr("id", pie.cssPrefix + "footer")
			.attr("class", pie.cssPrefix + "footer")
			.attr("text-anchor", function() {
				var location = "left";
				if (pie.options.footer.location === "bottom-center") {
					location = "middle";
				} else if (pie.options.footer.location === "bottom-right") {
					location = "left"; // on purpose. We have to change the x-coord to make it properly right-aligned
				}
				return location;
			})
			.attr("fill", function(d) { return d.color; })
			.style("font-size", function(d) { return d.fontSize + "px"; })
			.style("font-family", function(d) { return d.font; });
	},

	positionFooter: function(pie) {
		var footerLocation = pie.options.footer.location;
		var footerWidth = pie.textComponents.footer.w;
		var canvasWidth = pie.options.size.canvasWidth;
		var canvasHeight = pie.options.size.canvasHeight;
		var canvasPadding = pie.options.misc.canvasPadding;

		var x;
		if (footerLocation === "bottom-left") {
			x = canvasPadding.left;
		} else if (footerLocation === "bottom-right") {
			x = canvasWidth - footerWidth - canvasPadding.right;
		} else {
			x = canvasWidth / 2; // TODO - shouldn't this also take into account padding?
		}

		pie.svg.select("#" + pie.cssPrefix + "footer")
			.attr("x", x)
			.attr("y", canvasHeight - canvasPadding.bottom);
	},

	getHeaderHeight: function(pie) {
		var h;
		if (pie.textComponents.title.exists) {

			// if the subtitle isn't defined, it'll be set to 0
			var totalTitleHeight = pie.textComponents.title.h + pie.options.header.titleSubtitlePadding + pie.textComponents.subtitle.h;
			if (pie.options.header.location === "pie-center") {
				h = pie.pieCenter.y - (totalTitleHeight / 2) + totalTitleHeight;
			} else {
				h = totalTitleHeight + pie.options.misc.canvasPadding.top;
			}
		} else {
			if (pie.options.header.location === "pie-center") {
				var footerPlusPadding = pie.options.misc.canvasPadding.bottom + pie.textComponents.footer.h;
				h = ((pie.options.size.canvasHeight - footerPlusPadding) / 2) + pie.options.misc.canvasPadding.top + (pie.textComponents.subtitle.h / 2);
			} else {
				h = pie.options.misc.canvasPadding.top + pie.textComponents.subtitle.h;
			}
		}
		return h;
	}
};

  //// --------- validate.js -----------
var tt = {
	addTooltips: function(pie) {

		// group the label groups (label, percentage, value) into a single element for simpler positioning
		var tooltips = pie.svg.insert("g")
			.attr("class", pie.cssPrefix + "tooltips");

    tooltips.selectAll("." + pie.cssPrefix + "tooltip")
      .data(pie.options.data.content)
      .enter()
      .append("g")
        .attr("class", pie.cssPrefix + "tooltip")
        .attr("id", function(d, i) { return pie.cssPrefix + "tooltip" + i; })
        .style("opacity", 0)
      .append("rect")
        .attr({
			    rx: pie.options.tooltips.styles.borderRadius,
			    ry: pie.options.tooltips.styles.borderRadius,
			    x: -pie.options.tooltips.styles.padding,
			    opacity: pie.options.tooltips.styles.backgroundOpacity
		    })
		    .style("fill", pie.options.tooltips.styles.backgroundColor);

    tooltips.selectAll("." + pie.cssPrefix + "tooltip")
      .data(pie.options.data.content)
      .append("text")
        .attr("fill", function(d) { return pie.options.tooltips.styles.color; })
        .style("font-size", function(d) { return pie.options.tooltips.styles.fontSize; })
        .style("font-family", function(d) { return pie.options.tooltips.styles.font; })
        .text(function(d, i) {
          var caption = pie.options.tooltips.string;
          if (pie.options.tooltips.type === "caption") {
            caption = d.caption;
          }
          return tt.replacePlaceholders(pie, caption, i, {
            label: d.label,
            value: d.value,
            percentage: segments.getPercentage(pie, i, pie.options.labels.percentage.decimalPlaces)
          });
        });

		tooltips.selectAll("." + pie.cssPrefix + "tooltip rect")
			.attr({
				width: function (d, i) {
					var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
					return dims.w + (2 * pie.options.tooltips.styles.padding);
				},
				height: function (d, i) {
					var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
					return dims.h + (2 * pie.options.tooltips.styles.padding);
				},
				y: function (d, i) {
					var dims = helpers.getDimensions(pie.cssPrefix + "tooltip" + i);
					return -(dims.h / 2) + 1;
				}
			});
	},

  showTooltip: function(pie, index) {

	  var fadeInSpeed = pie.options.tooltips.styles.fadeInSpeed;
	  if (tt.currentTooltip === index) {
		  fadeInSpeed = 1;
	  }

    tt.currentTooltip = index;
    d3.select("#" + pie.cssPrefix + "tooltip" + index)
      .transition()
      .duration(fadeInSpeed)
      .style("opacity", function() { return 1; });

    tt.moveTooltip(pie);
  },

  moveTooltip: function(pie) {
    d3.selectAll("#" + pie.cssPrefix + "tooltip" + tt.currentTooltip)
      .attr("transform", function(d) {
        var mouseCoords = d3.mouse(this.parentNode);
        var x = mouseCoords[0] + pie.options.tooltips.styles.padding + 2;
        var y = mouseCoords[1] - (2 * pie.options.tooltips.styles.padding) - 2;
        return "translate(" + x + "," + y + ")";
      });
  },

  hideTooltip: function(pie, index) {
    d3.select("#" + pie.cssPrefix + "tooltip" + index)
      .style("opacity", function() { return 0; });

    // move the tooltip offscreen. This ensures that when the user next mouseovers the segment the hidden
    // element won't interfere
    d3.select("#" + pie.cssPrefix + "tooltip" + tt.currentTooltip)
       .attr("transform", function(d, i) {

         // klutzy, but it accounts for tooltip padding which could push it onscreen
         var x = pie.options.size.canvasWidth + 1000;
         var y = pie.options.size.canvasHeight + 1000;
         return "translate(" + x + "," + y + ")";
       });
  },

  replacePlaceholders: function(pie, str, index, replacements) {

    // if the user has defined a placeholderParser function, call it before doing the replacements
    if (helpers.isFunction(pie.options.tooltips.placeholderParser)) {
      pie.options.tooltips.placeholderParser(index, replacements);
    }

    var replacer = function()  {
      return function(match) {
        var placeholder = arguments[1];
        if (replacements.hasOwnProperty(placeholder)) {
          return replacements[arguments[1]];
        } else {
          return arguments[0];
        }
      };
    };
    return str.replace(/\{(\w+)\}/g, replacer(replacements));
  }
};


	// --------------------------------------------------------------------------------------------

	// our constructor
	var d3pie = function(element, options) {

		// element can be an ID or DOM element
		this.element = element;
		if (typeof element === "string") {
			var el = element.replace(/^#/, ""); // replace any jQuery-like ID hash char
			this.element = document.getElementById(el);
		}

		var opts = {};
		extend(true, opts, defaultSettings, options);
		this.options = opts;

		// if the user specified a custom CSS element prefix (ID, class), use it
		if (this.options.misc.cssPrefix !== null) {
			this.cssPrefix = this.options.misc.cssPrefix;
		} else {
			this.cssPrefix = "p" + _uniqueIDCounter + "_";
			_uniqueIDCounter++;
		}


		// now run some validation on the user-defined info
		if (!validate.initialCheck(this)) {
			return;
		}

		// add a data-role to the DOM node to let anyone know that it contains a d3pie instance, and the d3pie version
		d3.select(this.element).attr(_scriptName, _version);

		// things that are done once
		this.options.data.content = math.sortPieData(this);
		if (this.options.data.smallSegmentGrouping.enabled) {
			this.options.data.content = helpers.applySmallSegmentGrouping(this.options.data.content, this.options.data.smallSegmentGrouping);
		}
		this.options.colors = helpers.initSegmentColors(this);
		this.totalSize      = math.getTotalPieSize(this.options.data.content);

		_init.call(this);
	};

	d3pie.prototype.recreate = function() {
		// now run some validation on the user-defined info
		if (!validate.initialCheck(this)) {
			return;
		}
		this.options.data.content = math.sortPieData(this);
		if (this.options.data.smallSegmentGrouping.enabled) {
			this.options.data.content = helpers.applySmallSegmentGrouping(this.options.data.content, this.options.data.smallSegmentGrouping);
		}
		this.options.colors = helpers.initSegmentColors(this);
		this.totalSize      = math.getTotalPieSize(this.options.data.content);

		_init.call(this);
	};

	d3pie.prototype.redraw = function() {
		this.element.innerHTML = "";
		_init.call(this);
	};

	d3pie.prototype.destroy = function() {
		this.element.innerHTML = ""; // clear out the SVG
		d3.select(this.element).attr(_scriptName, null); // remove the data attr
	};

	/**
	 * Returns all pertinent info about the current open info. Returns null if nothing's open, or if one is, an object of
	 * the following form:
	 * 	{
	 * 	  element: DOM NODE,
	 * 	  index: N,
	 * 	  data: {}
	 * 	}
	 */
	d3pie.prototype.getOpenSegment = function() {
		var segment = this.currentlyOpenSegment;
		if (segment !== null && typeof segment !== "undefined") {
			var index = parseInt(d3.select(segment).attr("data-index"), 10);
			return {
				element: segment,
				index: index,
				data: this.options.data.content[index]
			};
		} else {
			return null;
		}
	};

	d3pie.prototype.openSegment = function(index) {
		index = parseInt(index, 10);
		if (index < 0 || index > this.options.data.content.length-1) {
			return;
		}
		segments.openSegment(this, d3.select("#" + this.cssPrefix + "segment" + index).node());
	};

	d3pie.prototype.closeSegment = function() {
		var segment = this.currentlyOpenSegment;
		if (segment) {
			segments.closeSegment(this, segment);
		}
	};

	// this let's the user dynamically update aspects of the pie chart without causing a complete redraw. It
	// intelligently re-renders only the part of the pie that the user specifies. Some things cause a repaint, others
	// just redraw the single element
	d3pie.prototype.updateProp = function(propKey, value) {
		switch (propKey) {
			case "header.title.text":
				var oldVal = helpers.processObj(this.options, propKey);
				helpers.processObj(this.options, propKey, value);
				d3.select("#" + this.cssPrefix + "title").html(value);
				if ((oldVal === "" && value !== "") || (oldVal !== "" && value === "")) {
					this.redraw();
				}
				break;

			case "header.subtitle.text":
				var oldValue = helpers.processObj(this.options, propKey);
				helpers.processObj(this.options, propKey, value);
				d3.select("#" + this.cssPrefix + "subtitle").html(value);
				if ((oldValue === "" && value !== "") || (oldValue !== "" && value === "")) {
					this.redraw();
				}
				break;

			case "callbacks.onload":
			case "callbacks.onMouseoverSegment":
			case "callbacks.onMouseoutSegment":
			case "callbacks.onClickSegment":
			case "effects.pullOutSegmentOnClick.effect":
			case "effects.pullOutSegmentOnClick.speed":
			case "effects.pullOutSegmentOnClick.size":
			case "effects.highlightSegmentOnMouseover":
			case "effects.highlightLuminosity":
				helpers.processObj(this.options, propKey, value);
				break;

			// everything else, attempt to update it & do a repaint
			default:
				helpers.processObj(this.options, propKey, value);

				this.destroy();
				this.recreate();
				break;
		}
	};


	// ------------------------------------------------------------------------------------------------


	var _init = function() {

		// prep-work
		this.svg = helpers.addSVGSpace(this);

		// store info about the main text components as part of the d3pie object instance
		this.textComponents = {
			headerHeight: 0,
			title: {
				exists: this.options.header.title.text !== "",
				h: 0,
				w: 0
			},
			subtitle: {
				exists: this.options.header.subtitle.text !== "",
				h: 0,
				w: 0
			},
			footer: {
				exists: this.options.footer.text !== "",
				h: 0,
				w: 0
			}
		};

		this.outerLabelGroupData = [];

		// add the key text components offscreen (title, subtitle, footer). We need to know their widths/heights for later computation
		if (this.textComponents.title.exists) {
			text.addTitle(this);
		}
		if (this.textComponents.subtitle.exists) {
			text.addSubtitle(this);
		}
		text.addFooter(this);

		// the footer never moves. Put it in place now
		var self = this;
		helpers.whenIdExists(this.cssPrefix + "footer", function() {
			text.positionFooter(self);
			var d3 = helpers.getDimensions(self.cssPrefix + "footer");
			self.textComponents.footer.h = d3.h;
			self.textComponents.footer.w = d3.w;
		});

		// now create the pie chart and position everything accordingly
		var reqEls = [];
		if (this.textComponents.title.exists)    { reqEls.push(this.cssPrefix + "title"); }
		if (this.textComponents.subtitle.exists) { reqEls.push(this.cssPrefix + "subtitle"); }
		if (this.textComponents.footer.exists)   { reqEls.push(this.cssPrefix + "footer"); }

		helpers.whenElementsExist(reqEls, function() {
			if (self.textComponents.title.exists) {
				var d1 = helpers.getDimensions(self.cssPrefix + "title");
				self.textComponents.title.h = d1.h;
				self.textComponents.title.w = d1.w;
			}
			if (self.textComponents.subtitle.exists) {
				var d2 = helpers.getDimensions(self.cssPrefix + "subtitle");
				self.textComponents.subtitle.h = d2.h;
				self.textComponents.subtitle.w = d2.w;
			}
			// now compute the full header height
			if (self.textComponents.title.exists || self.textComponents.subtitle.exists) {
				var headerHeight = 0;
				if (self.textComponents.title.exists) {
					headerHeight += self.textComponents.title.h;
					if (self.textComponents.subtitle.exists) {
						headerHeight += self.options.header.titleSubtitlePadding;
					}
				}
				if (self.textComponents.subtitle.exists) {
					headerHeight += self.textComponents.subtitle.h;
				}
				self.textComponents.headerHeight = headerHeight;
			}

			// at this point, all main text component dimensions have been calculated
			math.computePieRadius(self);

			// this value is used all over the place for placing things and calculating locations. We figure it out ONCE
			// and store it as part of the object
			math.calculatePieCenter(self);

			// position the title and subtitle
			text.positionTitle(self);
			text.positionSubtitle(self);

			// now create the pie chart segments, and gradients if the user desired
			if (self.options.misc.gradient.enabled) {
				segments.addGradients(self);
			}
			segments.create(self); // also creates this.arc
			labels.add(self, "inner", self.options.labels.inner.format);
			labels.add(self, "outer", self.options.labels.outer.format);

			// position the label elements relatively within their individual group (label, percentage, value)
			labels.positionLabelElements(self, "inner", self.options.labels.inner.format);
			labels.positionLabelElements(self, "outer", self.options.labels.outer.format);
			labels.computeOuterLabelCoords(self);

			// this is (and should be) dumb. It just places the outer groups at their calculated, collision-free positions
			labels.positionLabelGroups(self, "outer");

			// we use the label line positions for many other calculations, so ALWAYS compute them
			labels.computeLabelLinePositions(self);

			// only add them if they're actually enabled
			if (self.options.labels.lines.enabled && self.options.labels.outer.format !== "none") {
				labels.addLabelLines(self);
			}

			labels.positionLabelGroups(self, "inner");
			labels.fadeInLabelsAndLines(self);

      // add and position the tooltips
      if (self.options.tooltips.enabled) {
        tt.addTooltips(self);
      }

      segments.addSegmentEventHandlers(self);
		});
	};

  return d3pie;
}));


/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1044);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".bar-chart {\n  background-color: #fdfdfd;\n  overflow-y: scroll;\n  overflow-x: scroll;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 100%;\n  width: 100%; }\n\n.bar-chart .d3.d3-bar {\n  overflow-x: auto; }\n\n.bar-chart .bar-item {\n  cursor: pointer; }\n\n.bar-chart .axis {\n  font: 10px sans-serif; }\n\n.bar-chart .axis path {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges; }\n\n.bar-chart .axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges; }\n\n.bar-chart .x.axis path {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".pie-chart {\n  background-color: #fdfdfd;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: visible;\n  height: 100%;\n  width: 100%; }\n\n.pie-chart > svg {\n  position: relative;\n  margin: 0 auto;\n  display: table; }\n\nsvg [class*=\"_pieChart\"], svg [class*=\"_labelGroup\"] {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ 1276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jQuery = exports.animation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = __webpack_require__(1289);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _animationMixin = __webpack_require__(1357);

var _animationMixin2 = _interopRequireDefault(_animationMixin);

var _jQueryMixin = __webpack_require__(1358);

var _jQueryMixin2 = _interopRequireDefault(_jQueryMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var ToastMessageSpec = {
  displayName: "ToastMessage",

  getDefaultProps: function getDefaultProps() {
    var iconClassNames = {
      error: "toast-error",
      info: "toast-info",
      success: "toast-success",
      warning: "toast-warning"
    };

    return {
      className: "toast",
      iconClassNames: iconClassNames,
      titleClassName: "toast-title",
      messageClassName: "toast-message",
      tapToDismiss: true,
      closeButton: false
    };
  },
  handleOnClick: function handleOnClick(event) {
    this.props.handleOnClick(event);
    if (this.props.tapToDismiss) {
      this.hideToast(true);
    }
  },
  _handle_close_button_click: function _handle_close_button_click(event) {
    event.stopPropagation();
    this.hideToast(true);
  },
  _handle_remove: function _handle_remove() {
    this.props.handleRemove(this.props.toastId);
  },
  _render_close_button: function _render_close_button() {
    return this.props.closeButton ? _react2.default.createElement("button", {
      className: "toast-close-button", role: "button",
      onClick: this._handle_close_button_click,
      dangerouslySetInnerHTML: { __html: "&times;" }
    }) : false;
  },
  _render_title_element: function _render_title_element() {
    return this.props.title ? _react2.default.createElement(
      "div",
      { className: this.props.titleClassName },
      this.props.title
    ) : false;
  },
  _render_message_element: function _render_message_element() {
    return this.props.message ? _react2.default.createElement(
      "div",
      { className: this.props.messageClassName },
      this.props.message
    ) : false;
  },
  render: function render() {
    var iconClassName = this.props.iconClassName || this.props.iconClassNames[this.props.type];

    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)(this.props.className, iconClassName),
        style: this.props.style,
        onClick: this.handleOnClick,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      this._render_close_button(),
      this._render_title_element(),
      this._render_message_element()
    );
  }
};

var animation = exports.animation = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
  displayName: { $set: "ToastMessage.animation" },
  mixins: { $set: [_animationMixin2.default] }
}));

var jQuery = exports.jQuery = _react2.default.createClass((0, _reactAddonsUpdate2.default)(ToastMessageSpec, {
  displayName: { $set: "ToastMessage.jQuery" },
  mixins: { $set: [_jQueryMixin2.default] }
}));

/*
 * assign default noop functions
 */
ToastMessageSpec.handleMouseEnter = noop;
ToastMessageSpec.handleMouseLeave = noop;
ToastMessageSpec.hideToast = noop;

var ToastMessage = _react2.default.createClass(ToastMessageSpec);

ToastMessage.animation = animation;
ToastMessage.jQuery = jQuery;

exports.default = ToastMessage;

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ 1285:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1133),
    getSymbolsIn = __webpack_require__(1286),
    keysIn = __webpack_require__(231);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    getPrototype = __webpack_require__(224),
    getSymbols = __webpack_require__(1114),
    stubArray = __webpack_require__(1138);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1545);

/***/ }),

/***/ 1290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editor = function editor(editable, attr, format, editorClass, defaultValue, ignoreEditable) {
  if (editable === true || editable === false && ignoreEditable || typeof editable === 'string') {
    // simple declare
    var type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (!editable) {
    var _type = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type, defaultValue: defaultValue,
      disabled: 'disabled',
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable && (editable.type === undefined || editable.type === null || editable.type.trim() === '')) {
    var _type2 = editable ? 'text' : editable;
    return _react2.default.createElement('input', _extends({}, attr, { type: _type2, defaultValue: defaultValue,
      className: (editorClass || '') + ' form-control editor edit-text' }));
  } else if (editable.type) {
    // standard declare
    // put style if exist
    editable.style && (attr.style = editable.style);
    // put class if exist
    attr.className = (editorClass || '') + ' form-control editor edit-' + editable.type + (editable.className ? ' ' + editable.className : '');

    if (editable.type === 'select') {
      // process select input
      var options = [];
      var _editable$options = editable.options,
          values = _editable$options.values,
          textKey = _editable$options.textKey,
          valueKey = _editable$options.valueKey;

      if (Array.isArray(values)) {
        // only can use arrray data for options
        var text = void 0;
        var value = void 0;
        options = values.map(function (option, i) {
          if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
            text = textKey ? option[textKey] : option.text;
            value = valueKey ? option[valueKey] : option.value;
          } else {
            text = format ? format(option) : option;
            value = option;
          }
          return _react2.default.createElement(
            'option',
            { key: 'option' + i, value: value },
            text
          );
        });
      }
      return _react2.default.createElement(
        'select',
        _extends({}, attr, { defaultValue: defaultValue }),
        options
      );
    } else if (editable.type === 'textarea') {
      // process textarea input
      // put other if exist
      editable.cols && (attr.cols = editable.cols);
      editable.rows && (attr.rows = editable.rows);
      var saveBtn = void 0;
      var keyUpHandler = attr.onKeyDown;
      if (keyUpHandler) {
        attr.onKeyDown = function (e) {
          if (e.keyCode !== 13) {
            // not Pressed ENTER
            keyUpHandler(e);
          }
        };
        saveBtn = _react2.default.createElement(
          'button',
          {
            className: 'btn btn-info btn-xs textarea-save-btn',
            onClick: keyUpHandler },
          'save'
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
        saveBtn
      );
    } else if (editable.type === 'checkbox') {
      var _values = 'true:false';
      if (editable.options && editable.options.values) {
        // values = editable.options.values.split(':');
        _values = editable.options.values;
      }
      attr.className = attr.className.replace('form-control', '');
      attr.className += ' checkbox pull-right';

      var checked = defaultValue && defaultValue.toString() === _values.split(':')[0] ? true : false;

      return _react2.default.createElement('input', _extends({}, attr, { type: 'checkbox',
        value: _values, defaultChecked: checked }));
    } else if (editable.type === 'datetime') {
      return _react2.default.createElement('input', _extends({}, attr, { type: 'datetime-local', defaultValue: defaultValue }));
    } else {
      // process other input type. as password,url,email...
      return _react2.default.createElement('input', _extends({}, attr, { type: editable.type, defaultValue: defaultValue }));
    }
  }
  // default return for other case of editable
  return _react2.default.createElement('input', _extends({}, attr, { type: 'text',
    className: (editorClass || '') + ' form-control editor edit-text' }));
};

var _default = editor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(editor, 'editor', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Editor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Editor.js');
}();

;

/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToastr = __webpack_require__(1359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastrMessageFactory = _react2.default.createFactory(_reactToastr.ToastMessage.animation);

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'notice',

    // allow type is success,info,warning,error
    value: function notice(type, msg, title) {
      this.refs.toastr[type](msg, title, {
        mode: 'single',
        timeOut: 5000,
        extendedTimeOut: 1000,
        showAnimation: 'animated  bounceIn',
        hideAnimation: 'animated bounceOut'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactToastr.ToastContainer, { ref: 'toastr',
        toastMessageFactory: ToastrMessageFactory,
        id: 'toast-container',
        className: 'toast-top-right' });
    }
  }]);

  return Notification;
}(_react.Component);

var _default = Notification;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToastrMessageFactory, 'ToastrMessageFactory', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');

  __REACT_HOT_LOADER__.register(Notification, 'Notification', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Notification.js');
}();

;

/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _Date = __webpack_require__(1460);

var _Date2 = _interopRequireDefault(_Date);

var _Text = __webpack_require__(1464);

var _Text2 = _interopRequireDefault(_Text);

var _Regex = __webpack_require__(1462);

var _Regex2 = _interopRequireDefault(_Regex);

var _Select = __webpack_require__(1463);

var _Select2 = _interopRequireDefault(_Select);

var _Number = __webpack_require__(1461);

var _Number2 = _interopRequireDefault(_Number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint default-case: 0 */
/* eslint guard-for-in: 0 */


var TableHeaderColumn = function (_Component) {
  _inherits(TableHeaderColumn, _Component);

  function TableHeaderColumn(props) {
    _classCallCheck(this, TableHeaderColumn);

    var _this = _possibleConstructorReturn(this, (TableHeaderColumn.__proto__ || Object.getPrototypeOf(TableHeaderColumn)).call(this, props));

    _this.handleColumnClick = function () {
      return _this.__handleColumnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilter = _this.handleFilter.bind(_this);
    return _this;
  }

  _createClass(TableHeaderColumn, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.cleanFiltered();
      }
    }
  }, {
    key: '__handleColumnClick__REACT_HOT_LOADER__',
    value: function __handleColumnClick__REACT_HOT_LOADER__() {
      if (this.props.isOnlyHead || !this.props.dataSort) return;
      var order = this.props.sort;

      if (!order && this.props.defaultASC) order = _Const2.default.SORT_ASC;else order = this.props.sort === _Const2.default.SORT_DESC ? _Const2.default.SORT_ASC : _Const2.default.SORT_DESC;
      this.props.onSort(order, this.props.dataField);
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(value, type) {
      var filter = this.props.filter;

      filter.emitter.handleFilter(this.props.dataField, value, type, filter);
    }
  }, {
    key: 'getFilters',
    value: function getFilters() {
      var _props = this.props,
          headerText = _props.headerText,
          children = _props.children;

      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            return _react2.default.createElement(_Text2.default, _extends({ ref: 'textFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            return _react2.default.createElement(_Regex2.default, _extends({ ref: 'regexFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            return _react2.default.createElement(_Select2.default, _extends({ ref: 'selectFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            return _react2.default.createElement(_Number2.default, _extends({ ref: 'numberFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            return _react2.default.createElement(_Date2.default, _extends({ ref: 'dateFilter' }, this.props.filter, {
              columnName: headerText || children, filterHandler: this.handleFilter }));
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            var elm = this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);

            return _react2.default.cloneElement(elm, { ref: 'customFilter' });
          }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs['header-col'].setAttribute('data-field', this.props.dataField);
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultCaret = void 0;
      var sortCaret = void 0;
      var _props2 = this.props,
          headerText = _props2.headerText,
          dataAlign = _props2.dataAlign,
          dataField = _props2.dataField,
          headerAlign = _props2.headerAlign,
          headerTitle = _props2.headerTitle,
          hidden = _props2.hidden,
          sort = _props2.sort,
          dataSort = _props2.dataSort,
          sortIndicator = _props2.sortIndicator,
          children = _props2.children,
          caretRender = _props2.caretRender,
          className = _props2.className,
          isOnlyHead = _props2.isOnlyHead,
          style = _props2.thStyle;

      var thStyle = _extends({
        textAlign: headerAlign || dataAlign,
        display: hidden ? 'none' : null
      }, style);
      if (!isOnlyHead) {
        if (sortIndicator) {
          defaultCaret = !dataSort ? null : _react2.default.createElement(
            'span',
            { className: 'order' },
            _react2.default.createElement(
              'span',
              { className: 'dropdown' },
              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
            ),
            _react2.default.createElement(
              'span',
              { className: 'dropup' },
              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
            )
          );
        }
        sortCaret = sort ? _util2.default.renderReactSortCaret(sort) : defaultCaret;
        if (caretRender) {
          sortCaret = caretRender(sort, dataField);
        }
      }

      var classes = (0, _classnames2.default)(_util2.default.isFunction(className) ? className() : className, !isOnlyHead && dataSort ? 'sort-column' : '');

      var attr = {};
      if (headerTitle) {
        if (typeof children === 'string' && !headerText) {
          attr.title = children;
        } else {
          attr.title = headerText;
        }
      }
      return _react2.default.createElement(
        'th',
        _extends({ ref: 'header-col',
          className: classes,
          style: thStyle,
          onClick: this.handleColumnClick,
          rowSpan: this.props.rowSpan,
          colSpan: this.props.colSpan,
          'data-is-only-head': this.props.isOnlyHead
        }, attr),
        children,
        sortCaret,
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return e.stopPropagation();
            } },
          this.props.filter && !isOnlyHead ? this.getFilters() : null
        )
      );
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      if (!this.props.filter) return;

      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.cleanFiltered();
            break;
          }
        case _Const2.default.FILTER_TYPE.CUSTOM:
          {
            this.refs.customFilter.cleanFiltered();
            break;
          }
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(val) {
      if (!this.props.filter) return;
      switch (this.props.filter.type) {
        case _Const2.default.FILTER_TYPE.TEXT:
          {
            this.refs.textFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.REGEX:
          {
            this.refs.regexFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.SELECT:
          {
            this.refs.selectFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.NUMBER:
          {
            this.refs.numberFilter.applyFilter(val);
            break;
          }
        case _Const2.default.FILTER_TYPE.DATE:
          {
            this.refs.dateFilter.applyFilter(val);
            break;
          }
      }
    }
  }]);

  return TableHeaderColumn;
}(_react.Component);

var filterTypeArray = [];
for (var key in _Const2.default.FILTER_TYPE) {
  filterTypeArray.push(_Const2.default.FILTER_TYPE[key]);
}

TableHeaderColumn.propTypes = {
  dataField: _react.PropTypes.string,
  dataAlign: _react.PropTypes.string,
  headerAlign: _react.PropTypes.string,
  headerTitle: _react.PropTypes.bool,
  headerText: _react.PropTypes.string,
  dataSort: _react.PropTypes.bool,
  onSort: _react.PropTypes.func,
  dataFormat: _react.PropTypes.func,
  csvFormat: _react.PropTypes.func,
  csvHeader: _react.PropTypes.string,
  isKey: _react.PropTypes.bool,
  editable: _react.PropTypes.any,
  hidden: _react.PropTypes.bool,
  hiddenOnInsert: _react.PropTypes.bool,
  searchable: _react.PropTypes.bool,
  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  width: _react.PropTypes.string,
  sortFunc: _react.PropTypes.func,
  sortFuncExtraData: _react.PropTypes.any,
  columnClassName: _react.PropTypes.any,
  editColumnClassName: _react.PropTypes.any,
  invalidEditColumnClassName: _react.PropTypes.any,
  columnTitle: _react.PropTypes.bool,
  filterFormatted: _react.PropTypes.bool,
  filterValue: _react.PropTypes.func,
  sort: _react.PropTypes.string,
  caretRender: _react.PropTypes.func,
  formatExtraData: _react.PropTypes.any,
  csvFormatExtraData: _react.PropTypes.any,
  filter: _react.PropTypes.shape({
    type: _react.PropTypes.oneOf(filterTypeArray),
    delay: _react.PropTypes.number,
    options: _react.PropTypes.oneOfType([_react.PropTypes.object, // for SelectFilter
    _react.PropTypes.arrayOf(_react.PropTypes.number) // for NumberFilter
    ]),
    numberComparators: _react.PropTypes.arrayOf(_react.PropTypes.string),
    emitter: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    getElement: _react.PropTypes.func,
    customFilterParameters: _react.PropTypes.object,
    condition: _react.PropTypes.oneOf([_Const2.default.FILTER_COND_EQ, _Const2.default.FILTER_COND_LIKE])
  }),
  sortIndicator: _react.PropTypes.bool,
  export: _react.PropTypes.bool,
  expandable: _react.PropTypes.bool,
  tdAttr: _react.PropTypes.object,
  tdStyle: _react.PropTypes.object,
  thStyle: _react.PropTypes.object,
  keyValidator: _react.PropTypes.bool,
  defaultASC: _react.PropTypes.bool
};

TableHeaderColumn.defaultProps = {
  dataAlign: 'left',
  headerAlign: undefined,
  headerTitle: true,
  dataSort: false,
  dataFormat: undefined,
  csvFormat: undefined,
  csvHeader: undefined,
  isKey: false,
  editable: true,
  onSort: undefined,
  hidden: false,
  hiddenOnInsert: false,
  searchable: true,
  className: '',
  columnTitle: false,
  width: null,
  sortFunc: undefined,
  columnClassName: '',
  editColumnClassName: '',
  invalidEditColumnClassName: '',
  filterFormatted: false,
  filterValue: undefined,
  sort: undefined,
  formatExtraData: undefined,
  sortFuncExtraData: undefined,
  filter: undefined,
  sortIndicator: true,
  expandable: true,
  tdAttr: undefined,
  tdStyle: undefined,
  thStyle: undefined,
  keyValidator: false,
  defaultASC: false
};

var _default = TableHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHeaderColumn, 'TableHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(filterTypeArray, 'filterTypeArray', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeaderColumn.js');
}();

;

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function (_Component) {
  _inherits(SizePerPageDropDown, _Component);

  function SizePerPageDropDown() {
    _classCallCheck(this, SizePerPageDropDown);

    return _possibleConstructorReturn(this, (SizePerPageDropDown.__proto__ || Object.getPrototypeOf(SizePerPageDropDown)).apply(this, arguments));
  }

  _createClass(SizePerPageDropDown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          hidden = _props.hidden,
          onClick = _props.onClick,
          options = _props.options,
          className = _props.className,
          variation = _props.variation,
          btnContextual = _props.btnContextual,
          currSizePerPage = _props.currSizePerPage;


      var openClass = open ? 'open' : '';
      var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };

      return _react2.default.createElement(
        'span',
        { style: dropDownStyle,
          className: variation + ' ' + openClass + ' ' + className + ' ' + sizePerPageDefaultClass },
        _react2.default.createElement(
          'button',
          { className: 'btn ' + btnContextual + ' dropdown-toggle',
            id: 'pageDropDown', 'data-toggle': 'dropdown',
            'aria-expanded': open,
            onClick: onClick },
          currSizePerPage,
          _react2.default.createElement(
            'span',
            null,
            ' ',
            _react2.default.createElement('span', { className: 'caret' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
          options
        )
      );
    }
  }]);

  return SizePerPageDropDown;
}(_react.Component);

SizePerPageDropDown.propTypes = {
  open: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  currSizePerPage: _react.PropTypes.string,
  options: _react.PropTypes.array,
  variation: _react.PropTypes.oneOf(['dropdown', 'dropup']),
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default',
  variation: 'dropdown',
  className: ''
};

var _default = SizePerPageDropDown;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sizePerPageDefaultClass, 'sizePerPageDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(SizePerPageDropDown, 'SizePerPageDropDown', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');
}();

;

/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

var ClearSearchButton = function (_Component) {
  _inherits(ClearSearchButton, _Component);

  function ClearSearchButton() {
    _classCallCheck(this, ClearSearchButton);

    return _possibleConstructorReturn(this, (ClearSearchButton.__proto__ || Object.getPrototypeOf(ClearSearchButton)).apply(this, arguments));
  }

  _createClass(ClearSearchButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ ref: 'btn',
          className: 'btn ' + btnContextual + ' ' + className + ' ' + clearBtnDefaultClass,
          type: 'button',
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ClearSearchButton;
}(_react.Component);

ClearSearchButton.propTypes = {
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  btnText: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  className: '',
  btnText: 'Clear',
  onClick: undefined
};

var _default = ClearSearchButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(clearBtnDefaultClass, 'clearBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

  __REACT_HOT_LOADER__.register(ClearSearchButton, 'ClearSearchButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ClearSearchButton.js');
}();

;

/***/ }),

/***/ 1295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deleteBtnDefaultClass = 'react-bs-table-del-btn';

var DeleteButton = function (_Component) {
  _inherits(DeleteButton, _Component);

  function DeleteButton() {
    _classCallCheck(this, DeleteButton);

    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
  }

  _createClass(DeleteButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        ' ',
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + deleteBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return DeleteButton;
}(_react.Component);

DeleteButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
DeleteButton.defaultProps = {
  btnText: _Const2.default.DELETE_BTN_TEXT,
  btnContextual: 'btn-warning',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-trash'
};

var _default = DeleteButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(deleteBtnDefaultClass, 'deleteBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(DeleteButton, 'DeleteButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/DeleteButton.js');
}();

;

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

var ExportCSVButton = function (_Component) {
  _inherits(ExportCSVButton, _Component);

  function ExportCSVButton() {
    _classCallCheck(this, ExportCSVButton);

    return _possibleConstructorReturn(this, (ExportCSVButton.__proto__ || Object.getPrototypeOf(ExportCSVButton)).apply(this, arguments));
  }

  _createClass(ExportCSVButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        ' ',
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + exportCsvBtnDefaultClass + ' ' + className + ' hidden-print',
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ExportCSVButton;
}(_react.Component);

ExportCSVButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
ExportCSVButton.defaultProps = {
  btnText: _Const2.default.EXPORT_CSV_TEXT,
  btnContextual: 'btn-success',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-export'
};

var _default = ExportCSVButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(exportCsvBtnDefaultClass, 'exportCsvBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

  __REACT_HOT_LOADER__.register(ExportCSVButton, 'ExportCSVButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ExportCSVButton.js');
}();

;

/***/ }),

/***/ 1297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var insertBtnDefaultClass = 'react-bs-table-add-btn';

var InsertButton = function (_Component) {
  _inherits(InsertButton, _Component);

  function InsertButton() {
    _classCallCheck(this, InsertButton);

    return _possibleConstructorReturn(this, (InsertButton.__proto__ || Object.getPrototypeOf(InsertButton)).apply(this, arguments));
  }

  _createClass(InsertButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          btnGlyphicon = _props.btnGlyphicon,
          btnText = _props.btnText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
        btnText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          className: 'btn ' + btnContextual + ' ' + insertBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return InsertButton;
}(_react.Component);

InsertButton.propTypes = {
  btnText: _react.PropTypes.string,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  btnGlyphicon: _react.PropTypes.string
};
InsertButton.defaultProps = {
  btnText: _Const2.default.INSERT_BTN_TEXT,
  btnContextual: 'btn-info',
  className: '',
  onClick: undefined,
  btnGlyphicon: 'glyphicon-plus'
};

var _default = InsertButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(insertBtnDefaultClass, 'insertBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(InsertButton, 'InsertButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertButton.js');
}();

;

/***/ }),

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Editor = __webpack_require__(1290);

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/display-name: 0 */


var InsertModalBody = function (_Component) {
  _inherits(InsertModalBody, _Component);

  function InsertModalBody() {
    _classCallCheck(this, InsertModalBody);

    return _possibleConstructorReturn(this, (InsertModalBody.__proto__ || Object.getPrototypeOf(InsertModalBody)).apply(this, arguments));
  }

  _createClass(InsertModalBody, [{
    key: 'getFieldValue',
    value: function getFieldValue() {
      var _this2 = this;

      var newRow = {};
      this.props.columns.forEach(function (column, i) {
        var inputVal = void 0;
        if (column.autoValue) {
          // when you want same auto generate value and not allow edit, example ID field
          var time = new Date().getTime();
          inputVal = typeof column.autoValue === 'function' ? column.autoValue() : 'autovalue-' + time;
        } else if (column.hiddenOnInsert || !column.field) {
          inputVal = '';
        } else {
          var dom = _this2.refs[column.field + i];
          inputVal = dom.value;

          if (column.editable && column.editable.type === 'checkbox') {
            var values = inputVal.split(':');
            inputVal = dom.checked ? values[0] : values[1];
          } else if (column.customInsertEditor) {
            inputVal = inputVal || dom.getFieldValue();
          }
        }
        newRow[column.field] = inputVal;
      }, this);
      return newRow;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          validateState = _props.validateState,
          ignoreEditable = _props.ignoreEditable;

      return _react2.default.createElement(
        'div',
        { className: 'modal-body' },
        columns.map(function (column, i) {
          var editable = column.editable,
              format = column.format,
              field = column.field,
              name = column.name,
              autoValue = column.autoValue,
              hiddenOnInsert = column.hiddenOnInsert,
              customInsertEditor = column.customInsertEditor;

          var attr = {
            ref: field + i,
            placeholder: editable.placeholder ? editable.placeholder : name
          };
          var fieldElement = void 0;
          var defaultValue = editable.defaultValue || undefined;
          if (customInsertEditor) {
            var getElement = customInsertEditor.getElement;

            fieldElement = getElement(column, attr, 'form-control', ignoreEditable, defaultValue);
          }

          // fieldElement = false, means to use default editor when enable custom editor
          // Becasuse some users want to have default editor based on some condition.
          if (!customInsertEditor || fieldElement === false) {
            fieldElement = (0, _Editor2.default)(editable, attr, format, '', defaultValue, ignoreEditable);
          }

          if (autoValue || hiddenOnInsert || !column.field) {
            // when you want same auto generate value
            // and not allow edit, for example ID field
            return null;
          }
          var error = validateState[field] ? _react2.default.createElement(
            'span',
            { className: 'help-block bg-danger' },
            validateState[field]
          ) : null;
          return _react2.default.createElement(
            'div',
            { className: 'form-group', key: field },
            _react2.default.createElement(
              'label',
              null,
              name
            ),
            fieldElement,
            error
          );
        })
      );
    }
  }]);

  return InsertModalBody;
}(_react.Component);

InsertModalBody.propTypes = {
  columns: _react.PropTypes.array,
  validateState: _react.PropTypes.object,
  ignoreEditable: _react.PropTypes.bool
};

InsertModalBody.defaultProps = {
  validateState: {},
  ignoreEditable: false
};

var _default = InsertModalBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalBody, 'InsertModalBody', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalBody.js');
}();

;

/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalFooter = function (_Component) {
  _inherits(InsertModalFooter, _Component);

  function InsertModalFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalFooter.__proto__ || Object.getPrototypeOf(InsertModalFooter)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleSaveBtnClick = function () {
      var _this3;

      return (_this3 = _this).__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalFooter, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          beforeClose = _props.beforeClose,
          onModalClose = _props.onModalClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(e) {
      var _props2 = this.props,
          beforeSave = _props2.beforeSave,
          onSave = _props2.onSave;

      beforeSave && beforeSave(e);
      onSave();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          saveBtnText = _props3.saveBtnText,
          closeBtnText = _props3.closeBtnText,
          closeBtnContextual = _props3.closeBtnContextual,
          saveBtnContextual = _props3.saveBtnContextual,
          closeBtnClass = _props3.closeBtnClass,
          saveBtnClass = _props3.saveBtnClass,
          children = _props3.children;


      var content = children || _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + closeBtnContextual + ' ' + closeBtnClass,
            onClick: this.handleCloseBtnClick },
          closeBtnText
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'btn ' + saveBtnContextual + ' ' + saveBtnClass,
            onClick: this.handleSaveBtnClick },
          saveBtnText
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'modal-footer ' + className },
        content
      );
    }
  }]);

  return InsertModalFooter;
}(_react.Component);

InsertModalFooter.propTypes = {
  className: _react.PropTypes.string,
  saveBtnText: _react.PropTypes.string,
  closeBtnText: _react.PropTypes.string,
  closeBtnContextual: _react.PropTypes.string,
  saveBtnContextual: _react.PropTypes.string,
  closeBtnClass: _react.PropTypes.string,
  saveBtnClass: _react.PropTypes.string,
  beforeClose: _react.PropTypes.func,
  beforeSave: _react.PropTypes.func,
  onSave: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func
};
InsertModalFooter.defaultProps = {
  className: '',
  saveBtnText: _Const2.default.SAVE_BTN_TEXT,
  closeBtnText: _Const2.default.CLOSE_BTN_TEXT,
  closeBtnContextual: 'btn-default',
  saveBtnContextual: 'btn-primary',
  closeBtnClass: '',
  saveBtnClass: '',
  beforeClose: undefined,
  beforeSave: undefined
};

var _default = InsertModalFooter;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalFooter, 'InsertModalFooter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalFooter.js');
}();

;

/***/ }),

/***/ 1300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertModalHeader = function (_Component) {
  _inherits(InsertModalHeader, _Component);

  function InsertModalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalHeader.__proto__ || Object.getPrototypeOf(InsertModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
      var _this2;

      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModalHeader, [{
    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onModalClose = _props.onModalClose,
          beforeClose = _props.beforeClose;

      beforeClose && beforeClose(e);
      onModalClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          hideClose = _props2.hideClose,
          className = _props2.className,
          children = _props2.children;


      var closeBtn = hideClose ? null : _react2.default.createElement(
        'button',
        { type: 'button',
          className: 'close', onClick: this.handleCloseBtnClick },
        _react2.default.createElement(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        ),
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Close'
        )
      );

      var content = children || _react2.default.createElement(
        'span',
        null,
        closeBtn,
        _react2.default.createElement(
          'h4',
          { className: 'modal-title' },
          title
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'modal-header ' + className },
        content
      );
    }
  }]);

  return InsertModalHeader;
}(_react.Component);

InsertModalHeader.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  onModalClose: _react.PropTypes.func,
  hideClose: _react.PropTypes.bool,
  beforeClose: _react.PropTypes.func
};
InsertModalHeader.defaultProps = {
  className: '',
  title: 'Add Row',
  onModalClose: undefined,
  hideClose: false,
  beforeClose: undefined
};

var _default = InsertModalHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InsertModalHeader, 'InsertModalHeader', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModalHeader.js');
}();

;

/***/ }),

/***/ 1301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchField = function (_Component) {
  _inherits(SearchField, _Component);

  function SearchField() {
    _classCallCheck(this, SearchField);

    return _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).apply(this, arguments));
  }

  _createClass(SearchField, [{
    key: 'getValue',
    value: function getValue() {
      return _reactDom2.default.findDOMNode(this).value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      _reactDom2.default.findDOMNode(this).value = value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          onKeyUp = _props.onKeyUp,
          rest = _objectWithoutProperties(_props, ['className', 'defaultValue', 'placeholder', 'onKeyUp']);

      return _react2.default.createElement('input', _extends({
        className: 'form-control ' + className,
        type: 'text',
        defaultValue: defaultValue,
        placeholder: placeholder || SearchField.defaultProps.placeholder,
        onKeyUp: onKeyUp,
        style: { zIndex: 0 }
      }, rest));
    }
  }]);

  return SearchField;
}(_react.Component);

SearchField.propTypes = {
  className: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onKeyUp: _react.PropTypes.func
};
SearchField.defaultProps = {
  className: '',
  defaultValue: '',
  placeholder: 'Search',
  onKeyUp: undefined
};

var _default = SearchField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SearchField, 'SearchField', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/SearchField.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/SearchField.js');
}();

;

/***/ }),

/***/ 1302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

var ShowSelectedOnlyButton = function (_Component) {
  _inherits(ShowSelectedOnlyButton, _Component);

  function ShowSelectedOnlyButton() {
    _classCallCheck(this, ShowSelectedOnlyButton);

    return _possibleConstructorReturn(this, (ShowSelectedOnlyButton.__proto__ || Object.getPrototypeOf(ShowSelectedOnlyButton)).apply(this, arguments));
  }

  _createClass(ShowSelectedOnlyButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          btnContextual = _props.btnContextual,
          className = _props.className,
          onClick = _props.onClick,
          toggle = _props.toggle,
          showAllText = _props.showAllText,
          showOnlySelectText = _props.showOnlySelectText,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'toggle', 'showAllText', 'showOnlySelectText', 'children']);

      var content = children || _react2.default.createElement(
        'span',
        null,
        toggle ? showOnlySelectText : showAllText
      );
      return _react2.default.createElement(
        'button',
        _extends({ type: 'button',
          'aria-pressed': 'false',
          'data-toggle': 'button',
          className: 'btn ' + btnContextual + ' ' + showSelectedOnlyBtnDefaultClass + ' ' + className,
          onClick: onClick
        }, rest),
        content
      );
    }
  }]);

  return ShowSelectedOnlyButton;
}(_react.Component);

ShowSelectedOnlyButton.propTypes = {
  showAllText: _react.PropTypes.string,
  showOnlySelectText: _react.PropTypes.string,
  toggle: _react.PropTypes.bool,
  btnContextual: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
ShowSelectedOnlyButton.defaultProps = {
  showAllText: _Const2.default.SHOW_ALL,
  showOnlySelectText: _Const2.default.SHOW_ONLY_SELECT,
  toggle: false,
  btnContextual: 'btn-primary',
  className: '',
  onClick: undefined
};

var _default = ShowSelectedOnlyButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(showSelectedOnlyBtnDefaultClass, 'showSelectedOnlyBtnDefaultClass', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(ShowSelectedOnlyButton, 'ShowSelectedOnlyButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');
}();

;

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _omit2 = __webpack_require__(1445);

var _omit3 = _interopRequireDefault(_omit2);

var _includes2 = __webpack_require__(1441);

var _includes3 = _interopRequireDefault(_includes2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = __webpack_require__(1289);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _ToastMessage = __webpack_require__(1276);

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastContainer = function (_Component) {
  _inherits(ToastContainer, _Component);

  function ToastContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toasts: [],
      toastId: 0,
      messageList: []
    }, _this._handle_toast_remove = _this._handle_toast_remove.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastContainer, [{
    key: "error",
    value: function error(message, title, optionsOverride) {
      this._notify(this.props.toastType.error, message, title, optionsOverride);
    }
  }, {
    key: "info",
    value: function info(message, title, optionsOverride) {
      this._notify(this.props.toastType.info, message, title, optionsOverride);
    }
  }, {
    key: "success",
    value: function success(message, title, optionsOverride) {
      this._notify(this.props.toastType.success, message, title, optionsOverride);
    }
  }, {
    key: "warning",
    value: function warning(message, title, optionsOverride) {
      this._notify(this.props.toastType.warning, message, title, optionsOverride);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      Object.keys(this.refs).forEach(function (key) {
        _this2.refs[key].hideToast(false);
      });
    }
  }, {
    key: "_notify",
    value: function _notify(type, message, title) {
      var _this3 = this;

      var optionsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (this.props.preventDuplicates) {
        if ((0, _includes3.default)(this.state.messageList, message)) {
          return;
        }
      }
      var key = this.state.toastId++;
      var toastId = key;
      var newToast = (0, _reactAddonsUpdate2.default)(optionsOverride, {
        $merge: {
          type: type,
          title: title,
          message: message,
          toastId: toastId,
          key: key,
          ref: "toasts__" + key,
          handleOnClick: function handleOnClick(e) {
            if ("function" === typeof optionsOverride.handleOnClick) {
              optionsOverride.handleOnClick();
            }
            return _this3._handle_toast_on_click(e);
          },
          handleRemove: this._handle_toast_remove
        }
      });
      var toastOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [newToast]);

      var messageOperation = _defineProperty({}, "" + (this.props.newestOnTop ? "$unshift" : "$push"), [message]);

      var nextState = (0, _reactAddonsUpdate2.default)(this.state, {
        toasts: toastOperation,
        messageList: messageOperation
      });
      this.setState(nextState);
    }
  }, {
    key: "_handle_toast_on_click",
    value: function _handle_toast_on_click(event) {
      this.props.onClick(event);
      if (event.defaultPrevented) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "_handle_toast_remove",
    value: function _handle_toast_remove(toastId) {
      var _this4 = this;

      if (this.props.preventDuplicates) {
        this.state.previousMessage = "";
      }
      var operationName = "" + (this.props.newestOnTop ? "reduceRight" : "reduce");
      this.state.toasts[operationName](function (found, toast, index) {
        if (found || toast.toastId !== toastId) {
          return false;
        }
        _this4.setState((0, _reactAddonsUpdate2.default)(_this4.state, {
          toasts: { $splice: [[index, 1]] },
          messageList: { $splice: [[index, 1]] }
        }));
        return true;
      }, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var divProps = (0, _omit3.default)(this.props, ["toastType", "toastMessageFactory", "preventDuplicates", "newestOnTop"]);

      return _react2.default.createElement(
        "div",
        _extends({}, divProps, { "aria-live": "polite", role: "alert" }),
        this.state.toasts.map(function (toast) {
          return _this5.props.toastMessageFactory(toast);
        })
      );
    }
  }]);

  return ToastContainer;
}(_react.Component);

ToastContainer.propTypes = {
  toastType: _react.PropTypes.shape({
    error: _react.PropTypes.string,
    info: _react.PropTypes.string,
    success: _react.PropTypes.string,
    warning: _react.PropTypes.string
  }).isRequired,
  id: _react.PropTypes.string.isRequired,
  toastMessageFactory: _react.PropTypes.func.isRequired,
  preventDuplicates: _react.PropTypes.bool.isRequired,
  newestOnTop: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func.isRequired
};
ToastContainer.defaultProps = {
  toastType: {
    error: "error",
    info: "info",
    success: "success",
    warning: "warning"
  },
  id: "toast-container",
  toastMessageFactory: _react2.default.createFactory(_ToastMessage2.default.animation),
  preventDuplicates: true,
  newestOnTop: true,
  onClick: function onClick() {}
};
exports.default = ToastContainer;

/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactTransitionEvents = __webpack_require__(1544);

var _ReactTransitionEvents2 = _interopRequireDefault(_ReactTransitionEvents);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _elementClass = __webpack_require__(395);

var _elementClass2 = _interopRequireDefault(_elementClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TICK = 17;
var toString = Object.prototype.toString;
exports.default = {
  getDefaultProps: function getDefaultProps() {
    return {
      transition: null, // some examples defined in index.scss (scale, fadeInOut, rotate)
      showAnimation: "animated bounceIn", // or other animations from animate.css
      hideAnimation: "animated bounceOut",
      timeOut: 5000,
      extendedTimeOut: 1000
    };
  },
  componentWillMount: function componentWillMount() {
    this.classNameQueue = [];
    this.isHiding = false;
    this.intervalId = null;
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this._is_mounted = true;
    this._show();
    var node = _reactDom2.default.findDOMNode(this);

    var onHideComplete = function onHideComplete() {
      if (_this.isHiding) {
        _this._set_is_hiding(false);
        _ReactTransitionEvents2.default.removeEndEventListener(node, onHideComplete);
        _this._handle_remove();
      }
    };
    _ReactTransitionEvents2.default.addEndEventListener(node, onHideComplete);

    if (this.props.timeOut > 0) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this._is_mounted = false;
    if (this.intervalId) {
      clearTimeout(this.intervalId);
    }
  },
  _set_transition: function _set_transition(hide) {
    var animationType = hide ? "leave" : "enter";
    var node = _reactDom2.default.findDOMNode(this);
    var className = this.props.transition + "-" + animationType;
    var activeClassName = className + "-active";

    var endListener = function endListener(e) {
      if (e && e.target !== node) {
        return;
      }

      var classList = (0, _elementClass2.default)(node);
      classList.remove(className);
      classList.remove(activeClassName);

      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
    };

    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);

    (0, _elementClass2.default)(node).add(className);

    // Need to do this to actually trigger a transition.
    this._queue_class(activeClassName);
  },
  _clear_transition: function _clear_transition(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animationType = hide ? "leave" : "enter";
    var className = this.props.transition + "-" + animationType;
    var activeClassName = className + "-active";

    var classList = (0, _elementClass2.default)(node);
    classList.remove(className);
    classList.remove(activeClassName);
  },
  _set_animation: function _set_animation(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animations = this._get_animation_classes(hide);
    var endListener = function endListener(e) {
      if (e && e.target !== node) {
        return;
      }

      animations.forEach(function (anim) {
        return (0, _elementClass2.default)(node).remove(anim);
      });

      _ReactTransitionEvents2.default.removeEndEventListener(node, endListener);
    };

    _ReactTransitionEvents2.default.addEndEventListener(node, endListener);

    animations.forEach(function (anim) {
      return (0, _elementClass2.default)(node).add(anim);
    });
  },
  _get_animation_classes: function _get_animation_classes(hide) {
    var animations = hide ? this.props.hideAnimation : this.props.showAnimation;
    if ("[object Array]" === toString.call(animations)) {
      return animations;
    } else if ("string" === typeof animations) {
      return animations.split(" ");
    }
  },
  _clear_animation: function _clear_animation(hide) {
    var node = _reactDom2.default.findDOMNode(this);
    var animations = this._get_animation_classes(hide);
    animations.forEach(function (animation) {
      return (0, _elementClass2.default)(node).remove(animation);
    });
  },
  _queue_class: function _queue_class(className) {
    this.classNameQueue.push(className);

    if (!this.timeout) {
      this.timeout = setTimeout(this._flush_class_name_queue, TICK);
    }
  },
  _flush_class_name_queue: function _flush_class_name_queue() {
    var _this2 = this;

    if (this._is_mounted) {
      (function () {
        var node = _reactDom2.default.findDOMNode(_this2);
        _this2.classNameQueue.forEach(function (className) {
          return (0, _elementClass2.default)(node).add(className);
        });
      })();
    }
    this.classNameQueue.length = 0;
    this.timeout = null;
  },
  _show: function _show() {
    if (this.props.transition) {
      this._set_transition();
    } else if (this.props.showAnimation) {
      this._set_animation();
    }
  },
  handleMouseEnter: function handleMouseEnter() {
    clearTimeout(this.intervalId);
    this._set_interval_id(null);
    if (this.isHiding) {
      this._set_is_hiding(false);

      if (this.props.hideAnimation) {
        this._clear_animation(true);
      } else if (this.props.transition) {
        this._clear_transition(true);
      }
    }
  },
  handleMouseLeave: function handleMouseLeave() {
    if (!this.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
    }
  },
  hideToast: function hideToast(override) {
    if (this.isHiding || this.intervalId === null && !override) {
      return;
    }

    this._set_is_hiding(true);
    if (this.props.transition) {
      this._set_transition(true);
    } else if (this.props.hideAnimation) {
      this._set_animation(true);
    } else {
      this._handle_remove();
    }
  },
  _set_interval_id: function _set_interval_id(intervalId) {
    this.intervalId = intervalId;
  },
  _set_is_hiding: function _set_is_hiding(isHiding) {
    this.isHiding = isHiding;
  }
};

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function call_show_method($node, props) {
  $node[props.showMethod]({
    duration: props.showDuration,
    easing: props.showEasing
  });
}

exports.default = {
  getDefaultProps: function getDefaultProps() {
    return {
      style: {
        display: "none" },
      showMethod: "fadeIn", // slideDown, and show are built into jQuery
      showDuration: 300,
      showEasing: "swing", // and linear are built into jQuery
      hideMethod: "fadeOut",
      hideDuration: 1000,
      hideEasing: "swing",
      //
      timeOut: 5000,
      extendedTimeOut: 1000
    };
  },
  getInitialState: function getInitialState() {
    return {
      intervalId: null,
      isHiding: false
    };
  },
  componentDidMount: function componentDidMount() {
    call_show_method(this._get_$_node(), this.props);
    if (this.props.timeOut > 0) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.timeOut));
    }
  },
  handleMouseEnter: function handleMouseEnter() {
    clearTimeout(this.state.intervalId);
    this._set_interval_id(null);
    this._set_is_hiding(false);

    call_show_method(this._get_$_node().stop(true, true), this.props);
  },
  handleMouseLeave: function handleMouseLeave() {
    if (!this.state.isHiding && (this.props.timeOut > 0 || this.props.extendedTimeOut > 0)) {
      this._set_interval_id(setTimeout(this.hideToast, this.props.extendedTimeOut));
    }
  },
  hideToast: function hideToast(override) {
    if (this.state.isHiding || this.state.intervalId === null && !override) {
      return;
    }
    this.setState({ isHiding: true });

    this._get_$_node()[this.props.hideMethod]({
      duration: this.props.hideDuration,
      easing: this.props.hideEasing,
      complete: this._handle_remove
    });
  },
  _get_$_node: function _get_$_node() {
    /* eslint-disable no-undef */
    return jQuery(_reactDom2.default.findDOMNode(this));
    /* eslint-enable no-undef */
  },
  _set_interval_id: function _set_interval_id(intervalId) {
    this.setState({
      intervalId: intervalId
    });
  },
  _set_is_hiding: function _set_is_hiding(isHiding) {
    this.setState({
      isHiding: isHiding
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMessage = exports.ToastContainer = undefined;

var _ToastContainer = __webpack_require__(1356);

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

var _ToastMessage = __webpack_require__(1276);

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ToastContainer = _ToastContainer2.default;
exports.ToastMessage = _ToastMessage2.default;

/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".property-bar-chart > .title, .property-pie-chart > .title {\n  background-color: white !important;\n  position: relative;\n  margin-top: 10px;\n  height: 25px; }\n\n.property-list > .title {\n  background-color: white !important;\n  position: relative;\n  margin-top: 10px;\n  height: 25px; }\n\n.property-bar-chart > .title > label, .property-pie-chart > .title > label {\n  position: relative;\n  z-index: 100;\n  float: left;\n  left: 20%; }\n\n.property-list > .title > label {\n  position: relative;\n  z-index: 100;\n  float: left;\n  left: 4%; }\n\n.property-bar-chart .bar-chart, .property-pie-chart .pie-chart {\n  position: relative;\n  height: 200px; }\n\n.property-list .table {\n  margin-bottom: 0px; }\n\n.property-list .react-bs-container-body {\n  height: calc(100% - 40px) !important;\n  overflow: scroll; }\n\n.property-list-table {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: 10px;\n  overflow: hidden;\n  height: 192px; }\n\n.property-list-table .react-bs-table-container {\n  height: 100%; }\n\n.property-list-table .table-bordered {\n  border: none; }\n\n.property-list-table td {\n  text-align: left !important;\n  cursor: pointer;\n  outline: none; }\n\n.plant-factory .loader-background {\n  z-index: 1000; }\n", ""]);

// exports


/***/ }),

/***/ 1416:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ 1418:
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),

/***/ 1419:
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    keys = __webpack_require__(1038);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    keysIn = __webpack_require__(231);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(378),
    arrayEach = __webpack_require__(1093),
    assignValue = __webpack_require__(396),
    baseAssign = __webpack_require__(1420),
    baseAssignIn = __webpack_require__(1421),
    cloneBuffer = __webpack_require__(397),
    copyArray = __webpack_require__(399),
    copySymbols = __webpack_require__(1433),
    copySymbolsIn = __webpack_require__(1434),
    getAllKeys = __webpack_require__(1134),
    getAllKeysIn = __webpack_require__(1285),
    getTag = __webpack_require__(1135),
    initCloneArray = __webpack_require__(1437),
    initCloneByTag = __webpack_require__(1438),
    initCloneObject = __webpack_require__(400),
    isArray = __webpack_require__(217),
    isBuffer = __webpack_require__(222),
    isObject = __webpack_require__(58),
    keys = __webpack_require__(1038);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(1202),
    baseIsNaN = __webpack_require__(1424),
    strictIndexOf = __webpack_require__(1440);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 1424:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 1425:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1080),
    last = __webpack_require__(1443),
    parent = __webpack_require__(1439),
    toKey = __webpack_require__(1051);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(391);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(1418),
    arrayReduce = __webpack_require__(1283),
    mapToArray = __webpack_require__(1136);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),

/***/ 1430:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(1419),
    arrayReduce = __webpack_require__(1283),
    setToArray = __webpack_require__(1137);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    getSymbols = __webpack_require__(1114);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(379),
    getSymbolsIn = __webpack_require__(1286);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(403);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(1151),
    overRest = __webpack_require__(401),
    setToString = __webpack_require__(402);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1437:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(391),
    cloneDataView = __webpack_require__(1428),
    cloneMap = __webpack_require__(1429),
    cloneRegExp = __webpack_require__(1430),
    cloneSet = __webpack_require__(1431),
    cloneSymbol = __webpack_require__(1432),
    cloneTypedArray = __webpack_require__(398);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1089),
    baseSlice = __webpack_require__(1425);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 1440:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(1423),
    isArrayLike = __webpack_require__(133),
    isString = __webpack_require__(1442),
    toInteger = __webpack_require__(1229),
    values = __webpack_require__(1446);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(101),
    isArray = __webpack_require__(217),
    isObjectLike = __webpack_require__(83);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 1443:
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052),
    baseClone = __webpack_require__(1422),
    baseUnset = __webpack_require__(1426),
    castPath = __webpack_require__(1080),
    copyObject = __webpack_require__(379),
    customOmitClone = __webpack_require__(1435),
    flatRest = __webpack_require__(1436),
    getAllKeysIn = __webpack_require__(1285);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(1427),
    keys = __webpack_require__(1038);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _TableHeader = __webpack_require__(1456);

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = __webpack_require__(1452);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _PaginationList = __webpack_require__(1467);

var _PaginationList2 = _interopRequireDefault(_PaginationList);

var _ToolBar = __webpack_require__(1471);

var _ToolBar2 = _interopRequireDefault(_ToolBar);

var _TableFilter = __webpack_require__(1455);

var _TableFilter2 = _interopRequireDefault(_TableFilter);

var _TableDataStore = __webpack_require__(1468);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _csv_export_util = __webpack_require__(1458);

var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

var _Filter = __webpack_require__(1450);

var _TableHeaderColumn = __webpack_require__(1292);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-alert: 0 */
/* eslint max-len: 0 */


var BootstrapTable = function (_Component) {
  _inherits(BootstrapTable, _Component);

  function BootstrapTable(props) {
    _classCallCheck(this, BootstrapTable);

    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

    _this.handleSort = function () {
      return _this.__handleSort__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExpandRow = function () {
      return _this.__handleExpandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handlePaginationData = function () {
      return _this.__handlePaginationData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseLeave = function () {
      return _this.__handleMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleMouseEnter = function () {
      return _this.__handleMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleNavigateCell = function () {
      return _this.__handleNavigateCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectAllRow = function () {
      return _this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlySelected = function () {
      return _this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleAddRow = function () {
      return _this.__handleAddRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getPageByRowKey = function () {
      return _this.__getPageByRowKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRow = function () {
      return _this.__handleDropRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleFilterData = function () {
      return _this.__handleFilterData__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSearch = function () {
      return _this.__handleSearch__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollTop = function () {
      return _this.___scrollTop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._scrollHeader = function () {
      return _this.___scrollHeader__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.isIE = false;
    if (_util2.default.canUseDOM()) {
      _this.isIE = document.documentMode;
    }
    _this.store = new _TableDataStore.TableDataStore(_this.props.data ? _this.props.data.slice() : []);
    _this.isVerticalScroll = false;
    _this.initTable(_this.props);

    if (_this.props.selectRow && _this.props.selectRow.selected) {
      var copy = _this.props.selectRow.selected.slice();
      _this.store.setSelectedRowKey(copy);
    }
    var currPage = _Const2.default.PAGE_START_INDEX;
    if (typeof _this.props.options.page !== 'undefined') {
      currPage = _this.props.options.page;
    } else if (typeof _this.props.options.pageStartIndex !== 'undefined') {
      currPage = _this.props.options.pageStartIndex;
    }

    _this._adjustHeaderWidth = _this._adjustHeaderWidth.bind(_this);
    _this._adjustHeight = _this._adjustHeight.bind(_this);
    _this._adjustTable = _this._adjustTable.bind(_this);

    _this.state = {
      data: _this.getTableData(),
      currPage: currPage,
      expanding: _this.props.options.expanding || [],
      sizePerPage: _this.props.options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0],
      selectedRowKeys: _this.store.getSelectedRowKeys(),
      reset: false,
      x: _this.props.keyBoardNav ? 0 : -1,
      y: _this.props.keyBoardNav ? 0 : -1
    };
    return _this;
  }

  _createClass(BootstrapTable, [{
    key: 'initTable',
    value: function initTable(props) {
      var _this2 = this;

      var keyField = props.keyField;


      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
      _react2.default.Children.forEach(props.children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }
        if (column.props.isKey) {
          if (keyField) {
            throw new Error('Error. Multiple key column be detected in TableHeaderColumn.');
          }
          keyField = column.props.dataField;
        }
        if (column.props.filter) {
          // a column contains a filter
          if (!_this2.filter) {
            // first time create the filter on the BootstrapTable
            _this2.filter = new _Filter.Filter();
          }
          // pass the filter to column with filter
          column.props.filter.emitter = _this2.filter;
        }
      });

      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
        this.filter.on('onFilterChange', function (currentFilter) {
          _this2.handleFilterData(currentFilter);
        });
      }

      this.colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
        prev[curr.name] = curr;
        return prev;
      }, {});

      if (!isKeyFieldDefined && !keyField) {
        throw new Error('Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.');
      }

      this.store.setProps({
        isPagination: props.pagination,
        keyField: keyField,
        colInfos: this.colInfos,
        multiColumnSearch: props.multiColumnSearch,
        strictSearch: props.strictSearch,
        multiColumnSort: props.multiColumnSort,
        remote: this.props.remote
      });
    }
  }, {
    key: 'getTableData',
    value: function getTableData() {
      var result = [];
      var _props = this.props,
          options = _props.options,
          pagination = _props.pagination;

      var sortName = options.defaultSortName || options.sortName;
      var sortOrder = options.defaultSortOrder || options.sortOrder;
      var searchText = options.defaultSearch;

      if (sortName && sortOrder) {
        this.store.setSortInfo(sortOrder, sortName);
        if (!this.allowRemote(_Const2.default.REMOTE_SORT)) {
          this.store.sort();
        }
      }

      if (searchText) {
        this.store.search(searchText);
      }

      if (pagination) {
        var page = void 0;
        var sizePerPage = void 0;
        if (this.store.isChangedPage()) {
          sizePerPage = this.state.sizePerPage;
          page = this.state.currPage;
        } else {
          sizePerPage = options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0];
          page = options.page || 1;
        }
        result = this.store.page(page, sizePerPage).get();
      } else {
        result = this.store.get();
      }
      return result;
    }
  }, {
    key: 'getColumnsDescription',
    value: function getColumnsDescription(_ref) {
      var _this3 = this;

      var children = _ref.children;

      var rowCount = 0;
      _react2.default.Children.forEach(children, function (column) {
        if (column === null || column === undefined) {
          // Skip null and undefined value
          return;
        }

        if (Number(column.props.row) > rowCount) {
          rowCount = Number(column.props.row);
        }
      });
      return _react2.default.Children.map(children, function (column, i) {
        if (column === null || column === undefined) {
          // Return null for empty objects
          return null;
        }

        var rowIndex = column.props.row ? Number(column.props.row) : 0;
        var rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
        if (rowSpan + rowIndex === rowCount + 1) {
          var columnDescription = _this3.getColumnDescription(column);

          columnDescription.index = i;

          return columnDescription;
        }
      });
    }
  }, {
    key: 'getColumnDescription',
    value: function getColumnDescription(column) {
      var columnDescription = {
        name: column.props.dataField,
        align: column.props.dataAlign,
        sort: column.props.dataSort,
        format: column.props.dataFormat,
        formatExtraData: column.props.formatExtraData,
        filterFormatted: column.props.filterFormatted,
        filterValue: column.props.filterValue,
        editable: column.props.editable,
        customEditor: column.props.customEditor,
        hidden: column.props.hidden,
        hiddenOnInsert: column.props.hiddenOnInsert,
        searchable: column.props.searchable,
        className: column.props.columnClassName,
        editClassName: column.props.editColumnClassName,
        invalidEditColumnClassName: column.props.invalidEditColumnClassName,
        columnTitle: column.props.columnTitle,
        width: column.props.width,
        text: column.props.headerText || column.props.children,
        sortFunc: column.props.sortFunc,
        sortFuncExtraData: column.props.sortFuncExtraData,
        export: column.props.export,
        expandable: column.props.expandable,
        attrs: column.props.tdAttr,
        style: column.props.tdStyle
      };

      if (column.type !== _TableHeaderColumn2.default && _react2.default.isValidElement(column.props.children)) {
        columnDescription = _extends({}, columnDescription, this.getColumnDescription(_react2.default.Children.only(column.props.children)));
      }

      return columnDescription;
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this4 = this;

      var pageStartIndex = this.props.options.pageStartIndex;

      this.store.clean();
      this.setState(function () {
        return {
          data: _this4.getTableData(),
          currPage: _util2.default.getFirstPage(pageStartIndex),
          expanding: [],
          sizePerPage: _Const2.default.SIZE_PER_PAGE_LIST[0],
          selectedRowKeys: _this4.store.getSelectedRowKeys(),
          reset: true
        };
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initTable(nextProps);
      var options = nextProps.options,
          selectRow = nextProps.selectRow;
      var replace = nextProps.replace;

      replace = replace || this.props.replace;

      if (!nextProps.data) {
        return;
      }
      this.store.setData(nextProps.data.slice());

      if (!replace) {
        // from #481
        var page = this.state.currPage;
        if (this.props.options.page !== options.page) {
          page = options.page;
        }
        // from #481
        var sizePerPage = this.state.sizePerPage;
        if (this.props.options.sizePerPage !== options.sizePerPage) {
          sizePerPage = options.sizePerPage;
        }

        if (this.isRemoteDataSource()) {
          var data = nextProps.data.slice();
          if (nextProps.pagination && !this.allowRemote(_Const2.default.REMOTE_PAGE)) {
            data = this.store.page(page, sizePerPage).get();
          }
          this.setState(function () {
            return {
              data: data,
              currPage: page,
              sizePerPage: sizePerPage,
              reset: false
            };
          });
        } else {
          // #125
          // remove !options.page for #709
          if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
            page = 1;
          }
          var sortList = this.store.getSortInfo();
          var sortField = options.sortName;
          var sortOrder = options.sortOrder;
          if (sortField && sortOrder) {
            this.store.setSortInfo(sortOrder, sortField);
            this.store.sort();
          } else if (sortList.length > 0) {
            this.store.sort();
          }
          var _data = this.store.page(page, sizePerPage).get();
          this.setState(function () {
            return {
              data: _data,
              currPage: page,
              sizePerPage: sizePerPage,
              reset: false
            };
          });

          if (this.store.isSearching && options.afterSearch) {
            options.afterSearch(this.store.searchText, this.store.getDataIgnoringPagination());
          }

          if (this.store.isFiltering && options.afterColumnFilter) {
            options.afterColumnFilter(this.store.filterObj, this.store.getDataIgnoringPagination());
          }
        }

        // If setting the expanded rows is being handled externally
        // then overwrite the current expanded rows.
        if (this.props.options.expanding !== options.expanding) {
          this.setState(function () {
            return {
              expanding: options.expanding || []
            };
          });
        }

        if (selectRow && selectRow.selected) {
          // set default select rows to store.
          var copy = selectRow.selected.slice();
          this.store.setSelectedRowKey(copy);
          this.setState(function () {
            return {
              selectedRowKeys: copy,
              reset: false
            };
          });
        }
      } else {
        this.reset();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._adjustTable();
      window.addEventListener('resize', this._adjustTable);
      this.refs.body.refs.container.addEventListener('scroll', this._scrollHeader);
      if (this.props.scrollTop) {
        this._scrollTop();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._adjustTable);
      if (this.refs && this.refs.body && this.refs.body.refs) {
        this.refs.body.refs.container.removeEventListener('scroll', this._scrollHeader);
      }
      if (this.filter) {
        this.filter.removeAllListeners('onFilterChange');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._adjustTable();
      if (this.props.options.afterTableComplete) {
        this.props.options.afterTableComplete();
      }
    }

    /**
     * Returns true if in the current configuration,
     * the datagrid should load its data remotely.
     *
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */

  }, {
    key: 'isRemoteDataSource',
    value: function isRemoteDataSource(props) {
      var _ref2 = props || this.props,
          remote = _ref2.remote;

      return remote === true || _util2.default.isFunction(remote);
    }

    /**
     * Returns true if this action can be handled remote store
     * From #990, Sometimes, we need some actions as remote, some actions are handled by default
     * so function will tell you the target action is can be handled as remote or not.
     * @param  {String}  [action] Required.
     * @param  {Object}  [props] Optional. If not given, this.props will be used
     * @return {Boolean}
     */

  }, {
    key: 'allowRemote',
    value: function allowRemote(action, props) {
      var _ref3 = props || this.props,
          remote = _ref3.remote;

      if (typeof remote === 'function') {
        var remoteObj = remote(_Const2.default.REMOTE);
        return remoteObj[action];
      } else {
        return remote;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        height: this.props.height,
        maxHeight: this.props.maxHeight
      };

      var columns = this.getColumnsDescription(this.props);
      var sortList = this.store.getSortInfo();
      var pagination = this.renderPagination();
      var toolBar = this.renderToolBar();
      var tableFilter = this.renderTableFilter(columns);
      var isSelectAll = this.isSelectAll();
      var expandColumnOptions = this.props.expandColumnOptions;
      if (typeof expandColumnOptions.expandColumnBeforeSelectColumn === 'undefined') {
        expandColumnOptions.expandColumnBeforeSelectColumn = true;
      }
      var colGroups = _util2.default.renderColGroup(columns, this.props.selectRow, expandColumnOptions);
      var sortIndicator = this.props.options.sortIndicator;
      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
      var _props$options$pagina = this.props.options.paginationPosition,
          paginationPosition = _props$options$pagina === undefined ? _Const2.default.PAGINATION_POS_BOTTOM : _props$options$pagina;

      var showPaginationOnTop = paginationPosition !== _Const2.default.PAGINATION_POS_BOTTOM;
      var showPaginationOnBottom = paginationPosition !== _Const2.default.PAGINATION_POS_TOP;
      var selectRow = _extends({}, this.props.selectRow);
      if (this.props.cellEdit && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_NONE) {
        selectRow.clickToSelect = false;
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('react-bs-table-container', this.props.className, this.props.containerClass),
          style: this.props.containerStyle },
        toolBar,
        showPaginationOnTop ? pagination : null,
        _react2.default.createElement(
          'div',
          { ref: 'table',
            className: (0, _classnames2.default)('react-bs-table', { 'react-bs-table-bordered': this.props.bordered }, this.props.tableContainerClass),
            style: _extends({}, style, this.props.tableStyle),
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave },
          _react2.default.createElement(
            _TableHeader2.default,
            {
              ref: 'header',
              colGroups: colGroups,
              headerContainerClass: this.props.headerContainerClass,
              tableHeaderClass: this.props.tableHeaderClass,
              style: this.props.headerStyle,
              rowSelectType: this.props.selectRow.mode,
              customComponent: this.props.selectRow.customComponent,
              hideSelectColumn: this.props.selectRow.hideSelectColumn,
              sortList: sortList,
              sortIndicator: sortIndicator,
              onSort: this.handleSort,
              onSelectAllRow: this.handleSelectAllRow,
              bordered: this.props.bordered,
              condensed: this.props.condensed,
              isFiltered: this.filter ? true : false,
              isSelectAll: isSelectAll,
              reset: this.state.reset,
              expandColumnVisible: expandColumnOptions.expandColumnVisible,
              expandColumnComponent: expandColumnOptions.expandColumnComponent,
              expandColumnBeforeSelectColumn: expandColumnOptions.expandColumnBeforeSelectColumn },
            this.props.children
          ),
          _react2.default.createElement(_TableBody2.default, { ref: 'body',
            bodyContainerClass: this.props.bodyContainerClass,
            tableBodyClass: this.props.tableBodyClass,
            style: _extends({}, style, this.props.bodyStyle),
            data: this.state.data,
            expandComponent: this.props.expandComponent,
            expandableRow: this.props.expandableRow,
            expandRowBgColor: this.props.options.expandRowBgColor,
            expandBy: this.props.options.expandBy || _Const2.default.EXPAND_BY_ROW,
            expandBodyClass: this.props.options.expandBodyClass,
            expandParentClass: this.props.options.expandParentClass,
            columns: columns,
            trClassName: this.props.trClassName,
            trStyle: this.props.trStyle,
            striped: this.props.striped,
            bordered: this.props.bordered,
            hover: this.props.hover,
            keyField: this.store.getKeyField(),
            condensed: this.props.condensed,
            selectRow: selectRow,
            expandColumnOptions: this.props.expandColumnOptions,
            cellEdit: this.props.cellEdit,
            selectedRowKeys: this.state.selectedRowKeys,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            noDataText: this.props.options.noDataText,
            withoutNoDataText: this.props.options.withoutNoDataText,
            expanding: this.state.expanding,
            onExpand: this.handleExpandRow,
            onlyOneExpanding: this.props.options.onlyOneExpanding,
            beforeShowError: this.props.options.beforeShowError,
            keyBoardNav: this.props.keyBoardNav,
            onNavigateCell: this.handleNavigateCell,
            x: this.state.x,
            y: this.state.y,
            withoutTabIndex: this.props.withoutTabIndex,
            onEditCell: this.handleEditCell })
        ),
        tableFilter,
        showPaginationOnBottom ? pagination : null
      );
    }
  }, {
    key: 'isSelectAll',
    value: function isSelectAll() {
      if (this.store.isEmpty()) return false;
      var _props$selectRow = this.props.selectRow,
          unselectable = _props$selectRow.unselectable,
          onlyUnselectVisible = _props$selectRow.onlyUnselectVisible;

      var keyField = this.store.getKeyField();
      var allRowKeys = onlyUnselectVisible ? this.store.get().map(function (r) {
        return r[keyField];
      }) : this.store.getAllRowkey();
      var defaultSelectRowKeys = this.store.getSelectedRowKeys();

      if (onlyUnselectVisible) {
        defaultSelectRowKeys = defaultSelectRowKeys.filter(function (x) {
          return x !== allRowKeys;
        });
      }

      if (defaultSelectRowKeys.length === 0) return false;
      var match = 0;
      var noFound = 0;
      var unSelectableCnt = 0;
      defaultSelectRowKeys.forEach(function (selected) {
        if (allRowKeys.indexOf(selected) !== -1) match++;else noFound++;
        if (unselectable && unselectable.indexOf(selected) !== -1) unSelectableCnt++;
      });

      if (noFound === defaultSelectRowKeys.length) return false;
      if (match === allRowKeys.length) {
        return true;
      } else {
        if (unselectable && match <= unSelectableCnt && unSelectableCnt === unselectable.length) return false;else return 'indeterminate';
      }
      // return (match === allRowKeys.length) ? true : 'indeterminate';
    }
  }, {
    key: 'cleanSelected',
    value: function cleanSelected() {
      this.store.setSelectedRowKey([]);
      this.setState(function () {
        return {
          selectedRowKeys: [],
          reset: false
        };
      });
    }
  }, {
    key: 'cleanSort',
    value: function cleanSort() {
      this.store.cleanSortInfo();
      this.setState(function () {
        return {
          reset: false
        };
      });
    }
  }, {
    key: '__handleSort__REACT_HOT_LOADER__',
    value: function __handleSort__REACT_HOT_LOADER__(order, sortField) {
      if (this.props.options.onSortChange) {
        this.props.options.onSortChange(sortField, order, this.props);
      }
      this.store.setSortInfo(order, sortField);
      if (this.allowRemote(_Const2.default.REMOTE_SORT)) {
        return;
      }

      var result = this.store.sort().get();
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: '__handleExpandRow__REACT_HOT_LOADER__',
    value: function __handleExpandRow__REACT_HOT_LOADER__(expanding, rowKey, isRowExpanding) {
      var _this5 = this;

      var onExpand = this.props.options.onExpand;

      if (onExpand) {
        onExpand(rowKey, !isRowExpanding);
      }
      this.setState(function () {
        return { expanding: expanding, reset: false };
      }, function () {
        _this5._adjustHeaderWidth();
      });
    }
  }, {
    key: '__handlePaginationData__REACT_HOT_LOADER__',
    value: function __handlePaginationData__REACT_HOT_LOADER__(page, sizePerPage) {
      var _props$options = this.props.options,
          onPageChange = _props$options.onPageChange,
          pageStartIndex = _props$options.pageStartIndex;

      var emptyTable = this.store.isEmpty();
      if (onPageChange) {
        onPageChange(page, sizePerPage);
      }

      var state = {
        sizePerPage: sizePerPage,
        reset: false
      };
      if (!emptyTable) state.currPage = page;
      this.setState(function () {
        return state;
      });

      if (this.allowRemote(_Const2.default.REMOTE_PAGE) || emptyTable) {
        return;
      }

      var result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex, page), sizePerPage).get();
      this.setState(function () {
        return { data: result, reset: false };
      });
    }
  }, {
    key: '__handleMouseLeave__REACT_HOT_LOADER__',
    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseLeave) {
        this.props.options.onMouseLeave();
      }
    }
  }, {
    key: '__handleMouseEnter__REACT_HOT_LOADER__',
    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
      if (this.props.options.onMouseEnter) {
        this.props.options.onMouseEnter();
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOut) {
        this.props.options.onRowMouseOut(row, event);
      }
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(row, event) {
      if (this.props.options.onRowMouseOver) {
        this.props.options.onRowMouseOver(row, event);
      }
    }
  }, {
    key: '__handleNavigateCell__REACT_HOT_LOADER__',
    value: function __handleNavigateCell__REACT_HOT_LOADER__(_ref4) {
      var offSetX = _ref4.x,
          offSetY = _ref4.y,
          lastEditCell = _ref4.lastEditCell;
      var pagination = this.props.pagination;
      var _state = this.state,
          x = _state.x,
          y = _state.y,
          currPage = _state.currPage;

      x += offSetX;
      y += offSetY;

      var columns = this.store.getColInfos();
      var visibleRowSize = this.state.data.length;
      var visibleColumnSize = Object.keys(columns).filter(function (k) {
        return !columns[k].hidden;
      }).length;

      if (y >= visibleRowSize) {
        currPage++;
        var lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
        if (currPage <= lastPage) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = 0;
      } else if (y < 0) {
        currPage--;
        if (currPage > 0) {
          this.handlePaginationData(currPage, this.state.sizePerPage);
        } else {
          return;
        }
        y = visibleRowSize - 1;
      } else if (x >= visibleColumnSize) {
        if (y + 1 === visibleRowSize) {
          currPage++;
          var _lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
          if (currPage <= _lastPage) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = 0;
        } else {
          y++;
        }
        x = lastEditCell ? 1 : 0;
      } else if (x < 0) {
        x = visibleColumnSize - 1;
        if (y === 0) {
          currPage--;
          if (currPage > 0) {
            this.handlePaginationData(currPage, this.state.sizePerPage);
          } else {
            return;
          }
          y = this.state.sizePerPage - 1;
        } else {
          y--;
        }
      }
      this.setState(function () {
        return {
          x: x, y: y, currPage: currPage, reset: false
        };
      });
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(row, rowIndex, columnIndex) {
      var _props2 = this.props,
          options = _props2.options,
          keyBoardNav = _props2.keyBoardNav;

      if (options.onRowClick) {
        options.onRowClick(row, columnIndex, rowIndex);
      }
      if (keyBoardNav) {
        var _ref5 = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav : {},
            clickToNav = _ref5.clickToNav;

        clickToNav = clickToNav === false ? clickToNav : true;
        if (clickToNav) {
          this.setState(function () {
            return {
              x: columnIndex,
              y: rowIndex,
              reset: false
            };
          });
        }
      }
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(row) {
      if (this.props.options.onRowDoubleClick) {
        this.props.options.onRowDoubleClick(row);
      }
    }
  }, {
    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
    value: function __handleSelectAllRow__REACT_HOT_LOADER__(e) {
      var isSelected = e.currentTarget.checked;
      var keyField = this.store.getKeyField();
      var _props$selectRow2 = this.props.selectRow,
          onSelectAll = _props$selectRow2.onSelectAll,
          unselectable = _props$selectRow2.unselectable,
          selected = _props$selectRow2.selected,
          onlyUnselectVisible = _props$selectRow2.onlyUnselectVisible;

      var selectedRowKeys = onlyUnselectVisible ? this.state.selectedRowKeys : [];
      var result = true;
      var rows = this.store.get();

      // onlyUnselectVisible default is false, #1276
      if (!isSelected && !onlyUnselectVisible) {
        rows = this.store.getRowByKey(this.state.selectedRowKeys);
      }

      if (unselectable && unselectable.length > 0) {
        if (isSelected) {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1 || selected && selected.indexOf(r[keyField]) !== -1;
          });
        } else {
          rows = rows.filter(function (r) {
            return unselectable.indexOf(r[keyField]) === -1;
          });
        }
      }

      if (onSelectAll) {
        result = this.props.selectRow.onSelectAll(isSelected, rows);
      }

      if (typeof result == 'undefined' || result !== false) {
        if (isSelected) {
          if (Array.isArray(result)) {
            selectedRowKeys = result;
          } else {
            var currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            // onlyUnselectVisible default is false, #1276
            if (onlyUnselectVisible) {
              selectedRowKeys = selectedRowKeys.concat(currentRowKeys);
            } else {
              selectedRowKeys = currentRowKeys;
            }
          }
        } else {
          if (unselectable && selected) {
            selectedRowKeys = selected.filter(function (r) {
              return unselectable.indexOf(r) > -1;
            });
          } else if (onlyUnselectVisible) {
            var _currentRowKeys = rows.map(function (r) {
              return r[keyField];
            });
            selectedRowKeys = selectedRowKeys.filter(function (k) {
              return _currentRowKeys.indexOf(k) === -1;
            });
          }
        }

        this.store.setSelectedRowKey(selectedRowKeys);
        this.setState(function () {
          return { selectedRowKeys: selectedRowKeys, reset: false };
        });
      }
    }
  }, {
    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
      this.store.ignoreNonSelected();
      var pageStartIndex = this.props.options.pageStartIndex;

      var result = void 0;
      if (this.props.pagination) {
        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), this.state.sizePerPage).get();
      } else {
        result = this.store.get();
      }
      this.setState(function () {
        return {
          data: result,
          reset: false,
          currPage: _util2.default.getFirstPage(pageStartIndex)
        };
      });
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(row, isSelected, e, rowIndex) {
      var result = true;
      var currSelected = this.store.getSelectedRowKeys();
      var rowKey = row[this.store.getKeyField()];
      var selectRow = this.props.selectRow;

      if (selectRow.onSelect) {
        result = selectRow.onSelect(row, isSelected, e, rowIndex);
      }

      if (typeof result === 'undefined' || result !== false) {
        if (selectRow.mode === _Const2.default.ROW_SELECT_SINGLE) {
          currSelected = isSelected ? [rowKey] : [];
        } else {
          if (isSelected) {
            currSelected.push(rowKey);
          } else {
            currSelected = currSelected.filter(function (key) {
              return rowKey !== key;
            });
          }
        }

        this.store.setSelectedRowKey(currSelected);
        this.setState(function () {
          return {
            selectedRowKeys: currSelected,
            reset: false
          };
        });
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(newVal, rowIndex, colIndex) {
      var _this6 = this;

      var beforeSaveCell = this.props.cellEdit.beforeSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;

      var invalid = function invalid() {
        _this6.setState(function () {
          return {
            data: _this6.store.get(),
            reset: false
          };
        });
        return;
      };

      if (beforeSaveCell) {
        var beforeSaveCellCB = function beforeSaveCellCB(result) {
          _this6.refs.body.cancelEditCell();
          if (result || result === undefined) {
            _this6.editCell(newVal, rowIndex, colIndex);
          } else {
            invalid();
          }
        };
        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal, beforeSaveCellCB);
        if (isValid === false && typeof isValid !== 'undefined') {
          return invalid();
        } else if (isValid === _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          /* eslint consistent-return: 0 */
          return isValid;
        }
      }
      this.editCell(newVal, rowIndex, colIndex);
    }
  }, {
    key: 'editCell',
    value: function editCell(newVal, rowIndex, colIndex) {
      var onCellEdit = this.props.options.onCellEdit;
      var afterSaveCell = this.props.cellEdit.afterSaveCell;

      var columns = this.getColumnsDescription(this.props);
      var fieldName = columns[colIndex].name;
      if (onCellEdit) {
        newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
      }

      if (this.allowRemote(_Const2.default.REMOTE_CELL_EDIT)) {
        if (afterSaveCell) {
          afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
        }
        return;
      }

      var result = this.store.edit(newVal, rowIndex, fieldName).get();
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });

      if (afterSaveCell) {
        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
      }
    }
  }, {
    key: 'handleAddRowAtBegin',
    value: function handleAddRowAtBegin(newObj) {
      try {
        this.store.addAtBegin(newObj);
      } catch (e) {
        return e;
      }
      this._handleAfterAddingRow(newObj, true);
    }
  }, {
    key: '__handleAddRow__REACT_HOT_LOADER__',
    value: function __handleAddRow__REACT_HOT_LOADER__(newObj) {
      var _this7 = this;

      var isAsync = false;
      var onAddRow = this.props.options.onAddRow;


      var afterHandleAddRow = function afterHandleAddRow(errMsg) {
        if (isAsync) {
          _this7.refs.toolbar.afterHandleSaveBtnClick(errMsg);
        } else {
          return errMsg;
        }
      };

      var afterAddRowCB = function afterAddRowCB(errMsg) {
        if (typeof errMsg !== 'undefined' && errMsg !== '') return afterHandleAddRow(errMsg);
        if (_this7.allowRemote(_Const2.default.REMOTE_INSERT_ROW)) {
          if (_this7.props.options.afterInsertRow) {
            _this7.props.options.afterInsertRow(newObj);
          }
          return afterHandleAddRow();
        }

        try {
          _this7.store.add(newObj);
        } catch (e) {
          return afterHandleAddRow(e.message);
        }
        _this7._handleAfterAddingRow(newObj, false);
        return afterHandleAddRow();
      };

      if (onAddRow) {
        var colInfos = this.store.getColInfos();
        var errMsg = onAddRow(newObj, colInfos, afterAddRowCB);

        if (errMsg !== '' && errMsg !== false) {
          return errMsg;
        } else if (typeof errMsg === 'undefined') {
          return afterAddRowCB();
        } else {
          isAsync = true;
          return !isAsync;
        }
      } else {
        return afterAddRowCB();
      }
    }
  }, {
    key: 'getSizePerPage',
    value: function getSizePerPage() {
      return this.state.sizePerPage;
    }
  }, {
    key: 'getCurrentPage',
    value: function getCurrentPage() {
      return this.state.currPage;
    }
  }, {
    key: 'getTableDataIgnorePaging',
    value: function getTableDataIgnorePaging() {
      return this.store.getCurrentDisplayData();
    }
  }, {
    key: '__getPageByRowKey__REACT_HOT_LOADER__',
    value: function __getPageByRowKey__REACT_HOT_LOADER__(rowKey) {
      var sizePerPage = this.state.sizePerPage;

      var currentData = this.store.getCurrentDisplayData();
      var keyField = this.store.getKeyField();
      var result = currentData.findIndex(function (x) {
        return x[keyField] === rowKey;
      });
      if (result > -1) {
        return parseInt(result / sizePerPage, 10) + 1;
      } else {
        return result;
      }
    }
  }, {
    key: '__handleDropRow__REACT_HOT_LOADER__',
    value: function __handleDropRow__REACT_HOT_LOADER__(rowKeys) {
      var _this8 = this;

      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
      // add confirm before the delete action if that option is set.
      if (dropRowKeys && dropRowKeys.length > 0) {
        if (this.props.options.handleConfirmDeleteRow) {
          this.props.options.handleConfirmDeleteRow(function () {
            _this8.deleteRow(dropRowKeys);
          }, dropRowKeys);
        } else if (confirm('Are you sure you want to delete?')) {
          this.deleteRow(dropRowKeys);
        }
      }
    }
  }, {
    key: 'deleteRow',
    value: function deleteRow(dropRowKeys) {
      var _this9 = this;

      var dropRow = this.store.getRowByKey(dropRowKeys);
      var _props$options2 = this.props.options,
          onDeleteRow = _props$options2.onDeleteRow,
          afterDeleteRow = _props$options2.afterDeleteRow;


      if (onDeleteRow) {
        onDeleteRow(dropRowKeys, dropRow);
      }

      this.store.setSelectedRowKey([]); // clear selected row key

      if (this.allowRemote(_Const2.default.REMOTE_DROP_ROW) && afterDeleteRow) {
        afterDeleteRow(dropRowKeys, dropRow);
        return;
      }

      this.store.remove(dropRowKeys); // remove selected Row
      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
        var currPage = this.state.currPage;

        if (currPage > currLastPage) currPage = currLastPage;
        result = this.store.page(_util2.default.getNormalizedPage(currPage), sizePerPage).get();
        this.setState(function () {
          return {
            data: result,
            selectedRowKeys: _this9.store.getSelectedRowKeys(),
            currPage: currPage,
            reset: false
          };
        });
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false,
            selectedRowKeys: _this9.store.getSelectedRowKeys()
          };
        });
      }
      if (afterDeleteRow) {
        afterDeleteRow(dropRowKeys, dropRow);
      }
    }
  }, {
    key: '__handleFilterData__REACT_HOT_LOADER__',
    value: function __handleFilterData__REACT_HOT_LOADER__(filterObj) {
      var _props$options3 = this.props.options,
          onFilterChange = _props$options3.onFilterChange,
          pageStartIndex = _props$options3.pageStartIndex;

      if (onFilterChange) {
        var colInfos = this.store.getColInfos();
        onFilterChange(filterObj, colInfos);
      }

      this.setState(function () {
        return {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
      });

      if (this.allowRemote(_Const2.default.REMOTE_FILTER)) {
        if (this.props.options.afterColumnFilter) {
          this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.filter(filterObj);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;

      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterColumnFilter) {
        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      var result = {};

      var csvFileName = this.props.csvFileName;
      var _props$options4 = this.props.options,
          onExportToCSV = _props$options4.onExportToCSV,
          exportCSVSeparator = _props$options4.exportCSVSeparator,
          noAutoBOM = _props$options4.noAutoBOM,
          excludeCSVHeader = _props$options4.excludeCSVHeader;

      if (onExportToCSV) {
        result = onExportToCSV();
      } else {
        result = this.store.getDataIgnoringPagination();
      }
      var separator = exportCSVSeparator || _Const2.default.DEFAULT_CSV_SEPARATOR;
      var keys = [];
      this.props.children.filter(function (_) {
        return _ != null;
      }).map(function (column) {
        if (column.props.export === true || typeof column.props.export === 'undefined' && column.props.hidden === false) {
          keys.push({
            field: column.props.dataField,
            format: column.props.csvFormat,
            extraData: column.props.csvFormatExtraData,
            header: column.props.csvHeader || column.props.dataField,
            row: Number(column.props.row) || 0,
            rowSpan: Number(column.props.rowSpan) || 1,
            colSpan: Number(column.props.colSpan) || 1
          });
        }
      });

      if (_util2.default.isFunction(csvFileName)) {
        csvFileName = csvFileName();
      }

      (0, _csv_export_util2.default)(result, keys, csvFileName, separator, noAutoBOM, excludeCSVHeader);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__(searchText) {
      // Set search field if this function being called outside
      // but it's not necessary if calling fron inside.
      if (this.refs.toolbar) {
        this.refs.toolbar.setSearchInput(searchText);
      }
      var _props$options5 = this.props.options,
          onSearchChange = _props$options5.onSearchChange,
          pageStartIndex = _props$options5.pageStartIndex;

      if (onSearchChange) {
        var colInfos = this.store.getColInfos();
        onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
      }

      this.setState(function () {
        return {
          currPage: _util2.default.getFirstPage(pageStartIndex),
          reset: false
        };
      });

      if (this.allowRemote(_Const2.default.REMOTE_SEARCH)) {
        if (this.props.options.afterSearch) {
          this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
        }
        return;
      }

      this.store.search(searchText);

      var sortList = this.store.getSortInfo();

      if (sortList.length > 0) {
        this.store.sort();
      }

      var result = void 0;
      if (this.props.pagination) {
        var sizePerPage = this.state.sizePerPage;

        result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
      } else {
        result = this.store.get();
      }
      if (this.props.options.afterSearch) {
        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
      }
      this.setState(function () {
        return {
          data: result,
          reset: false
        };
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.pagination) {
        var dataSize = void 0;
        if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
          dataSize = this.props.fetchInfo.dataTotalSize;
        } else {
          dataSize = this.store.getDataNum();
        }
        var options = this.props.options;

        var withFirstAndLast = options.withFirstAndLast === undefined ? true : options.withFirstAndLast;
        if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 && this.props.ignoreSinglePage) return null;
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-pagination' },
          _react2.default.createElement(_PaginationList2.default, {
            ref: 'pagination',
            withFirstAndLast: withFirstAndLast,
            alwaysShowAllBtns: options.alwaysShowAllBtns,
            currPage: this.state.currPage,
            changePage: this.handlePaginationData,
            sizePerPage: this.state.sizePerPage,
            sizePerPageList: options.sizePerPageList || _Const2.default.SIZE_PER_PAGE_LIST,
            pageStartIndex: options.pageStartIndex,
            paginationShowsTotal: options.paginationShowsTotal,
            paginationSize: options.paginationSize || _Const2.default.PAGINATION_SIZE,
            dataSize: dataSize,
            onSizePerPageList: options.onSizePerPageList,
            prePage: options.prePage || _Const2.default.PRE_PAGE,
            nextPage: options.nextPage || _Const2.default.NEXT_PAGE,
            firstPage: options.firstPage || _Const2.default.FIRST_PAGE,
            lastPage: options.lastPage || _Const2.default.LAST_PAGE,
            prePageTitle: options.prePageTitle || _Const2.default.PRE_PAGE_TITLE,
            nextPageTitle: options.nextPageTitle || _Const2.default.NEXT_PAGE_TITLE,
            firstPageTitle: options.firstPageTitle || _Const2.default.FIRST_PAGE_TITLE,
            lastPageTitle: options.lastPageTitle || _Const2.default.LAST_PAGE_TITLE,
            hideSizePerPage: options.hideSizePerPage,
            sizePerPageDropDown: options.sizePerPageDropDown,
            hidePageListOnlyOnePage: options.hidePageListOnlyOnePage,
            paginationPanel: options.paginationPanel,
            keepSizePerPageState: options.keepSizePerPageState,
            open: false })
        );
      }
      return null;
    }
  }, {
    key: 'renderToolBar',
    value: function renderToolBar() {
      var _props3 = this.props,
          exportCSV = _props3.exportCSV,
          selectRow = _props3.selectRow,
          insertRow = _props3.insertRow,
          deleteRow = _props3.deleteRow,
          search = _props3.search,
          children = _props3.children,
          keyField = _props3.keyField;

      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
      var print = typeof this.props.options.printToolBar === 'undefined' ? true : this.props.options.printToolBar;
      if (enableShowOnlySelected || insertRow || deleteRow || search || exportCSV || this.props.options.searchPanel || this.props.options.btnGroup || this.props.options.toolBar) {
        var columns = void 0;
        if (Array.isArray(children)) {
          columns = children.filter(function (_) {
            return _ != null;
          }).map(function (column, r) {
            if (!column) return;
            var props = column.props;

            var isKey = props.isKey || keyField === props.dataField;
            return {
              isKey: isKey,
              name: props.headerText || props.children,
              field: props.dataField,
              hiddenOnInsert: props.hiddenOnInsert,
              keyValidator: props.keyValidator,
              customInsertEditor: props.customInsertEditor,
              // when you want same auto generate value and not allow edit, example ID field
              autoValue: props.autoValue || false,
              // for create editor, no params for column.editable() indicate that editor for new row
              editable: props.editable && _util2.default.isFunction(props.editable === 'function') ? props.editable() : props.editable,
              format: props.dataFormat ? function (value) {
                return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
              } : false
            };
          });
        } else {
          columns = [{
            name: children.props.headerText || children.props.children,
            field: children.props.dataField,
            editable: children.props.editable,
            customInsertEditor: children.props.customInsertEditor,
            hiddenOnInsert: children.props.hiddenOnInsert,
            keyValidator: children.props.keyValidator
          }];
        }
        return _react2.default.createElement(
          'div',
          { className: 'react-bs-table-tool-bar ' + (print ? '' : 'hidden-print') },
          _react2.default.createElement(_ToolBar2.default, {
            ref: 'toolbar',
            defaultSearch: this.props.options.defaultSearch,
            clearSearch: this.props.options.clearSearch,
            searchPosition: this.props.options.searchPosition,
            searchDelayTime: this.props.options.searchDelayTime,
            enableInsert: insertRow,
            enableDelete: deleteRow,
            enableSearch: search,
            enableExportCSV: exportCSV,
            enableShowOnlySelected: enableShowOnlySelected,
            columns: columns,
            searchPlaceholder: this.props.searchPlaceholder,
            exportCSVText: this.props.options.exportCSVText,
            insertText: this.props.options.insertText,
            deleteText: this.props.options.deleteText,
            saveText: this.props.options.saveText,
            closeText: this.props.options.closeText,
            ignoreEditable: this.props.options.ignoreEditable,
            onAddRow: this.handleAddRow,
            onDropRow: this.handleDropRow,
            onSearch: this.handleSearch,
            onExportCSV: this.handleExportCSV,
            onShowOnlySelected: this.handleShowOnlySelected,
            insertModalHeader: this.props.options.insertModalHeader,
            insertModalFooter: this.props.options.insertModalFooter,
            insertModalBody: this.props.options.insertModalBody,
            insertModal: this.props.options.insertModal,
            insertBtn: this.props.options.insertBtn,
            deleteBtn: this.props.options.deleteBtn,
            showSelectedOnlyBtn: this.props.options.showSelectedOnlyBtn,
            exportCSVBtn: this.props.options.exportCSVBtn,
            clearSearchBtn: this.props.options.clearSearchBtn,
            searchField: this.props.options.searchField,
            searchPanel: this.props.options.searchPanel,
            btnGroup: this.props.options.btnGroup,
            toolBar: this.props.options.toolBar,
            reset: this.state.reset,
            isValidKey: this.store.isValidKey })
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'renderTableFilter',
    value: function renderTableFilter(columns) {
      if (this.props.columnFilter) {
        return _react2.default.createElement(_TableFilter2.default, { columns: columns,
          rowSelectType: this.props.selectRow.mode,
          onFilter: this.handleFilterData });
      } else {
        return null;
      }
    }
  }, {
    key: '___scrollTop__REACT_HOT_LOADER__',
    value: function ___scrollTop__REACT_HOT_LOADER__() {
      var scrollTop = this.props.scrollTop;

      if (scrollTop === _Const2.default.SCROLL_TOP) {
        this.refs.body.refs.container.scrollTop = 0;
      } else if (scrollTop === _Const2.default.SCROLL_BOTTOM) {
        this.refs.body.refs.container.scrollTop = this.refs.body.refs.container.scrollHeight;
      } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
        this.refs.body.refs.container.scrollTop = scrollTop;
      }
    }
  }, {
    key: '___scrollHeader__REACT_HOT_LOADER__',
    value: function ___scrollHeader__REACT_HOT_LOADER__(e) {
      this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
    }
  }, {
    key: '_adjustTable',
    value: function _adjustTable() {
      this._adjustHeight();
      if (!this.props.printable) {
        this._adjustHeaderWidth();
      }
    }
  }, {
    key: '_adjustHeaderWidth',
    value: function _adjustHeaderWidth() {
      var header = this.refs.header.getHeaderColGrouop();
      var tbody = this.refs.body.refs.tbody;
      var bodyHeader = this.refs.body.getHeaderColGrouop();
      var firstRow = tbody.childNodes[0];
      var isScroll = tbody.parentNode.getBoundingClientRect().height > tbody.parentNode.parentNode.getBoundingClientRect().height;

      var scrollBarWidth = isScroll ? _util2.default.getScrollBarWidth() : 0;
      if (firstRow && this.store.getDataNum()) {
        if (isScroll || this.isVerticalScroll !== isScroll) {
          var cells = firstRow.childNodes;
          for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var computedStyle = window.getComputedStyle(cell);
            var width = parseFloat(computedStyle.width.replace('px', ''));
            if (this.isIE) {
              var paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace('px', ''));
              var paddingRightWidth = parseFloat(computedStyle.paddingRight.replace('px', ''));
              var borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
              var borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
              width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
            }
            var lastPadding = cells.length - 1 === i ? scrollBarWidth : 0;
            if (width <= 0) {
              width = 120;
              cell.width = width + lastPadding + 'px';
            }
            var result = width + lastPadding + 'px';
            header[i].style.width = result;
            header[i].style.minWidth = result;
            if (cells.length - 1 === i) {
              bodyHeader[i].style.width = width + 'px';
              bodyHeader[i].style.minWidth = width + 'px';
            } else {
              bodyHeader[i].style.width = result;
              bodyHeader[i].style.minWidth = result;
            }
          }
        }
      } else {
        for (var _i in bodyHeader) {
          if (bodyHeader.hasOwnProperty(_i)) {
            var child = bodyHeader[_i];
            if (child.style) {
              if (child.style.width) {
                header[_i].style.width = child.style.width;
              }
              if (child.style.minWidth) {
                header[_i].style.minWidth = child.style.minWidth;
              }
            }
          }
        }
      }
      this.isVerticalScroll = isScroll;
    }
  }, {
    key: '_adjustHeight',
    value: function _adjustHeight() {
      var height = this.props.height;
      var maxHeight = this.props.maxHeight;

      if (typeof height === 'number' && !isNaN(height) || height.indexOf('%') === -1) {
        this.refs.body.refs.container.style.height = parseFloat(height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
      }
      if (maxHeight) {
        maxHeight = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight.replace('px', ''), 10);

        this.refs.body.refs.container.style.maxHeight = maxHeight - this.refs.header.refs.container.offsetHeight + 'px';
      }
    }
  }, {
    key: '_handleAfterAddingRow',
    value: function _handleAfterAddingRow(newObj, atTheBeginning) {
      var result = void 0;
      if (this.props.pagination) {
        // if pagination is enabled and inserting row at the end,
        // change page to the last page
        // otherwise, change it to the first page
        var sizePerPage = this.state.sizePerPage;


        if (atTheBeginning) {
          var pageStartIndex = this.props.options.pageStartIndex;

          result = this.store.page(_util2.default.getNormalizedPage(pageStartIndex), sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: _util2.default.getFirstPage(pageStartIndex),
              reset: false
            };
          });
        } else {
          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
          result = this.store.page(currLastPage, sizePerPage).get();
          this.setState(function () {
            return {
              data: result,
              currPage: currLastPage,
              reset: false
            };
          });
        }
      } else {
        result = this.store.get();
        this.setState(function () {
          return {
            data: result,
            reset: false
          };
        });
      }

      if (this.props.options.afterInsertRow) {
        this.props.options.afterInsertRow(newObj);
      }
    }
  }]);

  return BootstrapTable;
}(_react.Component);

BootstrapTable.propTypes = {
  keyField: _react.PropTypes.string,
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  maxHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
  remote: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]), // remote data, default is false
  replace: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  scrollTop: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  striped: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  hover: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  pagination: _react.PropTypes.bool,
  printable: _react.PropTypes.bool,
  withoutTabIndex: _react.PropTypes.bool,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  searchPlaceholder: _react.PropTypes.string,
  selectRow: _react.PropTypes.shape({
    mode: _react.PropTypes.oneOf([_Const2.default.ROW_SELECT_NONE, _Const2.default.ROW_SELECT_SINGLE, _Const2.default.ROW_SELECT_MULTI]),
    customComponent: _react.PropTypes.func,
    bgColor: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    selected: _react.PropTypes.array,
    onSelect: _react.PropTypes.func,
    onSelectAll: _react.PropTypes.func,
    clickToSelect: _react.PropTypes.bool,
    hideSelectColumn: _react.PropTypes.bool,
    clickToSelectAndEditCell: _react.PropTypes.bool,
    clickToExpand: _react.PropTypes.bool,
    showOnlySelected: _react.PropTypes.bool,
    unselectable: _react.PropTypes.array,
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    onlyUnselectVisible: _react.PropTypes.bool
  }),
  cellEdit: _react.PropTypes.shape({
    mode: _react.PropTypes.string,
    blurToSave: _react.PropTypes.bool,
    beforeSaveCell: _react.PropTypes.func,
    afterSaveCell: _react.PropTypes.func,
    nonEditableRows: _react.PropTypes.func
  }),
  insertRow: _react.PropTypes.bool,
  deleteRow: _react.PropTypes.bool,
  search: _react.PropTypes.bool,
  multiColumnSearch: _react.PropTypes.bool,
  strictSearch: _react.PropTypes.bool,
  columnFilter: _react.PropTypes.bool,
  trClassName: _react.PropTypes.any,
  trStyle: _react.PropTypes.any,
  tableStyle: _react.PropTypes.object,
  containerStyle: _react.PropTypes.object,
  headerStyle: _react.PropTypes.object,
  bodyStyle: _react.PropTypes.object,
  containerClass: _react.PropTypes.string,
  tableContainerClass: _react.PropTypes.string,
  headerContainerClass: _react.PropTypes.string,
  bodyContainerClass: _react.PropTypes.string,
  tableHeaderClass: _react.PropTypes.string,
  tableBodyClass: _react.PropTypes.string,
  options: _react.PropTypes.shape({
    clearSearch: _react.PropTypes.bool,
    sortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    defaultSortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
    sortIndicator: _react.PropTypes.bool,
    afterTableComplete: _react.PropTypes.func,
    afterDeleteRow: _react.PropTypes.func,
    afterInsertRow: _react.PropTypes.func,
    afterSearch: _react.PropTypes.func,
    afterColumnFilter: _react.PropTypes.func,
    onRowClick: _react.PropTypes.func,
    onRowDoubleClick: _react.PropTypes.func,
    page: _react.PropTypes.number,
    pageStartIndex: _react.PropTypes.number,
    paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
    sizePerPageList: _react.PropTypes.array,
    sizePerPage: _react.PropTypes.number,
    paginationSize: _react.PropTypes.number,
    paginationPosition: _react.PropTypes.oneOf([_Const2.default.PAGINATION_POS_TOP, _Const2.default.PAGINATION_POS_BOTTOM, _Const2.default.PAGINATION_POS_BOTH]),
    hideSizePerPage: _react.PropTypes.bool,
    hidePageListOnlyOnePage: _react.PropTypes.bool,
    alwaysShowAllBtns: _react.PropTypes.bool,
    withFirstAndLast: _react.PropTypes.bool,
    keepSizePerPageState: _react.PropTypes.bool,
    onSortChange: _react.PropTypes.func,
    onPageChange: _react.PropTypes.func,
    onSizePerPageList: _react.PropTypes.func,
    onFilterChange: _react2.default.PropTypes.func,
    onSearchChange: _react2.default.PropTypes.func,
    onAddRow: _react2.default.PropTypes.func,
    onExportToCSV: _react2.default.PropTypes.func,
    onCellEdit: _react2.default.PropTypes.func,
    noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    withoutNoDataText: _react2.default.PropTypes.bool,
    handleConfirmDeleteRow: _react.PropTypes.func,
    prePage: _react.PropTypes.any,
    nextPage: _react.PropTypes.any,
    firstPage: _react.PropTypes.any,
    lastPage: _react.PropTypes.any,
    prePageTitle: _react.PropTypes.string,
    nextPageTitle: _react.PropTypes.string,
    firstPageTitle: _react.PropTypes.string,
    lastPageTitle: _react.PropTypes.string,
    searchDelayTime: _react.PropTypes.number,
    excludeCSVHeader: _react.PropTypes.bool,
    exportCSVText: _react.PropTypes.string,
    exportCSVSeparator: _react.PropTypes.string,
    insertText: _react.PropTypes.string,
    deleteText: _react.PropTypes.string,
    saveText: _react.PropTypes.string,
    closeText: _react.PropTypes.string,
    ignoreEditable: _react.PropTypes.bool,
    defaultSearch: _react.PropTypes.string,
    insertModalHeader: _react.PropTypes.func,
    insertModalBody: _react.PropTypes.func,
    insertModalFooter: _react.PropTypes.func,
    insertModal: _react.PropTypes.func,
    insertBtn: _react.PropTypes.func,
    deleteBtn: _react.PropTypes.func,
    showSelectedOnlyBtn: _react.PropTypes.func,
    exportCSVBtn: _react.PropTypes.func,
    clearSearchBtn: _react.PropTypes.func,
    searchField: _react.PropTypes.func,
    searchPanel: _react.PropTypes.func,
    btnGroup: _react.PropTypes.func,
    toolBar: _react.PropTypes.func,
    sizePerPageDropDown: _react.PropTypes.func,
    paginationPanel: _react.PropTypes.func,
    searchPosition: _react.PropTypes.string,
    expandRowBgColor: _react.PropTypes.string,
    expandBy: _react.PropTypes.string,
    expanding: _react.PropTypes.array,
    onExpand: _react.PropTypes.func,
    onlyOneExpanding: _react.PropTypes.bool,
    expandBodyClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    expandParentClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
    beforeShowError: _react.PropTypes.func,
    printToolBar: _react.PropTypes.bool,
    noAutoBOM: _react.PropTypes.bool
  }),
  fetchInfo: _react.PropTypes.shape({
    dataTotalSize: _react.PropTypes.number
  }),
  exportCSV: _react.PropTypes.bool,
  csvFileName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  ignoreSinglePage: _react.PropTypes.bool,
  expandableRow: _react.PropTypes.func,
  expandComponent: _react.PropTypes.func,
  expandColumnOptions: _react.PropTypes.shape({
    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
    expandColumnVisible: _react.PropTypes.bool,
    expandColumnComponent: _react.PropTypes.func,
    expandColumnBeforeSelectColumn: _react.PropTypes.bool
  })
};
BootstrapTable.defaultProps = {
  replace: false,
  scrollTop: undefined,
  expandComponent: undefined,
  expandableRow: undefined,
  expandColumnOptions: {
    expandColumnVisible: false,
    expandColumnComponent: undefined,
    expandColumnBeforeSelectColumn: true
  },
  height: '100%',
  maxHeight: undefined,
  striped: false,
  bordered: true,
  hover: false,
  condensed: false,
  pagination: false,
  printable: false,
  withoutTabIndex: false,
  keyBoardNav: false,
  searchPlaceholder: undefined,
  selectRow: {
    mode: _Const2.default.ROW_SELECT_NONE,
    bgColor: _Const2.default.ROW_SELECT_BG_COLOR,
    selected: [],
    onSelect: undefined,
    onSelectAll: undefined,
    clickToSelect: false,
    hideSelectColumn: false,
    clickToSelectAndEditCell: false,
    clickToExpand: false,
    showOnlySelected: false,
    unselectable: [],
    customComponent: undefined,
    onlyUnselectVisible: false
  },
  cellEdit: {
    mode: _Const2.default.CELL_EDIT_NONE,
    blurToSave: false,
    beforeSaveCell: undefined,
    afterSaveCell: undefined,
    nonEditableRows: undefined
  },
  insertRow: false,
  deleteRow: false,
  search: false,
  multiColumnSearch: false,
  strictSearch: undefined,
  multiColumnSort: 1,
  columnFilter: false,
  trClassName: '',
  trStyle: undefined,
  tableStyle: undefined,
  containerStyle: undefined,
  headerStyle: undefined,
  bodyStyle: undefined,
  containerClass: null,
  tableContainerClass: null,
  headerContainerClass: null,
  bodyContainerClass: null,
  tableHeaderClass: null,
  tableBodyClass: null,
  options: {
    clearSearch: false,
    sortName: undefined,
    sortOrder: undefined,
    defaultSortName: undefined,
    defaultSortOrder: undefined,
    sortIndicator: true,
    afterTableComplete: undefined,
    afterDeleteRow: undefined,
    afterInsertRow: undefined,
    afterSearch: undefined,
    afterColumnFilter: undefined,
    onRowClick: undefined,
    onRowDoubleClick: undefined,
    onMouseLeave: undefined,
    onMouseEnter: undefined,
    onRowMouseOut: undefined,
    onRowMouseOver: undefined,
    page: undefined,
    paginationShowsTotal: false,
    sizePerPageList: _Const2.default.SIZE_PER_PAGE_LIST,
    sizePerPage: undefined,
    paginationSize: _Const2.default.PAGINATION_SIZE,
    paginationPosition: _Const2.default.PAGINATION_POS_BOTTOM,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: false,
    alwaysShowAllBtns: false,
    withFirstAndLast: true,
    keepSizePerPageState: false,
    onSizePerPageList: undefined,
    noDataText: undefined,
    withoutNoDataText: false,
    handleConfirmDeleteRow: undefined,
    prePage: _Const2.default.PRE_PAGE,
    nextPage: _Const2.default.NEXT_PAGE,
    firstPage: _Const2.default.FIRST_PAGE,
    lastPage: _Const2.default.LAST_PAGE,
    prePageTitle: _Const2.default.PRE_PAGE_TITLE,
    nextPageTitle: _Const2.default.NEXT_PAGE_TITLE,
    firstPageTitle: _Const2.default.FIRST_PAGE_TITLE,
    lastPageTitle: _Const2.default.LAST_PAGE_TITLE,
    pageStartIndex: 1,
    searchDelayTime: undefined,
    excludeCSVHeader: false,
    exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
    exportCSVSeparator: _Const2.default.DEFAULT_CSV_SEPARATOR,
    insertText: _Const2.default.INSERT_BTN_TEXT,
    deleteText: _Const2.default.DELETE_BTN_TEXT,
    saveText: _Const2.default.SAVE_BTN_TEXT,
    closeText: _Const2.default.CLOSE_BTN_TEXT,
    ignoreEditable: false,
    defaultSearch: '',
    insertModalHeader: undefined,
    insertModalBody: undefined,
    insertModalFooter: undefined,
    insertModal: undefined,
    insertBtn: undefined,
    deleteBtn: undefined,
    showSelectedOnlyBtn: undefined,
    exportCSVBtn: undefined,
    clearSearchBtn: undefined,
    searchField: undefined,
    searchPanel: undefined,
    btnGroup: undefined,
    toolBar: undefined,
    sizePerPageDropDown: undefined,
    paginationPanel: undefined,
    searchPosition: 'right',
    expandRowBgColor: undefined,
    expandBy: _Const2.default.EXPAND_BY_ROW,
    expanding: [],
    onExpand: undefined,
    onlyOneExpanding: false,
    expandBodyClass: null,
    expandParentClass: null,
    beforeShowError: undefined,
    printToolBar: true,
    noAutoBOM: true
  },
  fetchInfo: {
    dataTotalSize: 0
  },
  exportCSV: false,
  csvFileName: 'spreadsheet.csv',
  ignoreSinglePage: false
};

var _default = BootstrapTable;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BootstrapTable, 'BootstrapTable', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/BootstrapTable.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/BootstrapTable.js');
}();

;

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: 0 */
/* eslint no-nested-ternary: 0 */


var ExpandComponent = function (_Component) {
  _inherits(ExpandComponent, _Component);

  function ExpandComponent() {
    _classCallCheck(this, ExpandComponent);

    return _possibleConstructorReturn(this, (ExpandComponent.__proto__ || Object.getPrototypeOf(ExpandComponent)).apply(this, arguments));
  }

  _createClass(ExpandComponent, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var trCss = {
        style: {
          backgroundColor: this.props.bgColor
        },
        className: (0, _classnames2.default)(className)
      };
      return _react2.default.createElement(
        'tr',
        _extends({ hidden: this.props.hidden, width: this.props.width }, trCss),
        _react2.default.createElement(
          'td',
          { colSpan: this.props.colSpan },
          this.props.children
        )
      );
    }
  }]);

  return ExpandComponent;
}(_react.Component);

var _default = ExpandComponent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExpandComponent, 'ExpandComponent', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandComponent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandComponent.js');
}();

;

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandRowHeaderColumn = function (_Component) {
  _inherits(ExpandRowHeaderColumn, _Component);

  function ExpandRowHeaderColumn() {
    _classCallCheck(this, ExpandRowHeaderColumn);

    return _possibleConstructorReturn(this, (ExpandRowHeaderColumn.__proto__ || Object.getPrototypeOf(ExpandRowHeaderColumn)).apply(this, arguments));
  }

  _createClass(ExpandRowHeaderColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
          className: 'react-bs-table-expand-cell',
          'data-is-only-head': false },
        this.props.children
      );
    }
  }]);

  return ExpandRowHeaderColumn;
}(_react.Component);

ExpandRowHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  rowCount: _react.PropTypes.number
};
var _default = ExpandRowHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ExpandRowHeaderColumn, 'ExpandRowHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandRowHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/ExpandRowHeaderColumn.js');
}();

;

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _events = __webpack_require__(1416);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = exports.Filter = function (_EventEmitter) {
  _inherits(Filter, _EventEmitter);

  function Filter(data) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, data));

    _this.currentFilter = {};
    return _this;
  }

  _createClass(Filter, [{
    key: 'handleFilter',
    value: function handleFilter(dataField, value, type, filterObj) {
      var filterType = type || _Const2.default.FILTER_TYPE.CUSTOM;

      var props = {
        cond: filterObj.condition // Only for select and text filter
      };

      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        // value of the filter is an object
        var hasValue = true;
        for (var prop in value) {
          if (!value[prop] || value[prop] === '') {
            hasValue = false;
            break;
          }
        }
        // if one of the object properties is undefined or empty, we remove the filter
        if (hasValue) {
          this.currentFilter[dataField] = { value: value, type: filterType, props: props };
        } else {
          delete this.currentFilter[dataField];
        }
      } else if (!value || value.trim() === '') {
        delete this.currentFilter[dataField];
      } else {
        this.currentFilter[dataField] = { value: value.trim(), type: filterType, props: props };
      }
      this.emit('onFilterChange', this.currentFilter);
    }
  }]);

  return Filter;
}(_events.EventEmitter);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Filter, 'Filter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/Filter.js');
}();

;

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRowHeaderColumn = function (_Component) {
  _inherits(SelectRowHeaderColumn, _Component);

  function SelectRowHeaderColumn() {
    _classCallCheck(this, SelectRowHeaderColumn);

    return _possibleConstructorReturn(this, (SelectRowHeaderColumn.__proto__ || Object.getPrototypeOf(SelectRowHeaderColumn)).apply(this, arguments));
  }

  _createClass(SelectRowHeaderColumn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
          'data-is-only-head': false },
        this.props.children
      );
    }
  }]);

  return SelectRowHeaderColumn;
}(_react.Component);

SelectRowHeaderColumn.propTypes = {
  children: _react.PropTypes.node,
  rowCount: _react.PropTypes.number
};
var _default = SelectRowHeaderColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SelectRowHeaderColumn, 'SelectRowHeaderColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/SelectRowHeaderColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/SelectRowHeaderColumn.js');
}();

;

/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _TableRow = __webpack_require__(1457);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableColumn = __webpack_require__(1453);

var _TableColumn2 = _interopRequireDefault(_TableColumn);

var _TableEditColumn = __webpack_require__(1454);

var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _ExpandComponent = __webpack_require__(1448);

var _ExpandComponent2 = _interopRequireDefault(_ExpandComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBody = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody(props) {
    _classCallCheck(this, TableBody);

    var _this = _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call(this, props));

    _this.handleCellKeyDown = function () {
      return _this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOut = function () {
      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowMouseOver = function () {
      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowClick = function () {
      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRowDoubleClick = function () {
      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRow = function () {
      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSelectRowColumChange = function () {
      return _this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickCell = function () {
      return _this.__handleClickCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleEditCell = function () {
      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.nextEditableCell = function () {
      return _this.__nextEditableCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCompleteEditCell = function () {
      return _this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.cancelEditCell = function () {
      return _this.__cancelEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClickonSelectColumn = function () {
      return _this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.getHeaderColGrouop = function () {
      return _this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      currEditCell: null
    };
    return _this;
  }

  _createClass(TableBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cellEdit = _props.cellEdit,
          beforeShowError = _props.beforeShowError,
          x = _props.x,
          y = _props.y,
          keyBoardNav = _props.keyBoardNav,
          trStyle = _props.trStyle;

      var tableClasses = (0, _classnames2.default)('table', {
        'table-striped': this.props.striped,
        'table-bordered': this.props.bordered,
        'table-hover': this.props.hover,
        'table-condensed': this.props.condensed
      }, this.props.tableBodyClass);

      var noneditableRows = cellEdit.nonEditableRows && cellEdit.nonEditableRows() || [];
      var unselectable = this.props.selectRow.unselectable || [];
      var isSelectRowDefined = this._isSelectRowDefined();
      var tableHeader = _util2.default.renderColGroup(this.props.columns, this.props.selectRow, this.props.expandColumnOptions);
      var inputType = this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
      var CustomComponent = this.props.selectRow.customComponent;
      var enableKeyBoardNav = keyBoardNav === true || (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object';
      var customEditAndNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyleOnEditCell : null;
      var customNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyle : null;
      var ExpandColumnCustomComponent = this.props.expandColumnOptions.expandColumnComponent;
      var expandColSpan = this.props.columns.filter(function (col) {
        return col && !col.hidden;
      }).length;
      if (isSelectRowDefined && !this.props.selectRow.hideSelectColumn) {
        expandColSpan += 1;
      }
      var tabIndex = 1;
      if (this.props.expandColumnOptions.expandColumnVisible) {
        expandColSpan += 1;
      }

      var tableRows = this.props.data.map(function (data, r) {
        var tableColumns = this.props.columns.filter(function (_) {
          return _ != null;
        }).map(function (column, i) {
          var fieldValue = data[column.name];
          var isFocusCell = r === y && i === x;
          if (column.name !== this.props.keyField && // Key field can't be edit
          column.editable && // column is editable? default is true, user can set it false
          column.editable.readOnly !== true && this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i && noneditableRows.indexOf(data[this.props.keyField]) === -1) {
            var editable = column.editable;
            var format = column.format ? function (value) {
              return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
            } : false;
            if (_util2.default.isFunction(column.editable)) {
              editable = column.editable(fieldValue, data, r, i);
            }

            return _react2.default.createElement(_TableEditColumn2.default, {
              completeEdit: this.handleCompleteEditCell
              // add by bluespring for column editor customize
              , editable: editable,
              customEditor: column.customEditor,
              format: column.format ? format : false,
              key: i,
              blurToSave: cellEdit.blurToSave,
              onTab: this.handleEditCell,
              rowIndex: r,
              colIndex: i,
              row: data,
              fieldValue: fieldValue,
              className: column.editClassName,
              invalidColumnClassName: column.invalidEditColumnClassName,
              beforeShowError: beforeShowError,
              isFocus: isFocusCell,
              customStyleWithNav: customEditAndNavStyle });
          } else {
            // add by bluespring for className customize
            var columnChild = fieldValue && fieldValue.toString();
            var columnTitle = null;
            var tdClassName = column.className;
            if (_util2.default.isFunction(column.className)) {
              tdClassName = column.className(fieldValue, data, r, i);
            }

            if (typeof column.format !== 'undefined') {
              var formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
              if (!_react2.default.isValidElement(formattedValue)) {
                columnChild = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
              } else {
                columnChild = formattedValue;
                columnTitle = column.columnTitle && formattedValue ? formattedValue.toString() : null;
              }
            } else {
              columnTitle = column.columnTitle && fieldValue ? fieldValue.toString() : null;
            }
            return _react2.default.createElement(
              _TableColumn2.default,
              { key: i,
                rIndex: r,
                dataAlign: column.align,
                className: tdClassName,
                columnTitle: columnTitle,
                cellEdit: cellEdit,
                hidden: column.hidden,
                onEdit: this.handleEditCell,
                width: column.width,
                onClick: this.handleClickCell,
                attrs: column.attrs,
                style: column.style,
                tabIndex: tabIndex++ + '',
                isFocus: isFocusCell,
                keyBoardNav: enableKeyBoardNav,
                onKeyDown: this.handleCellKeyDown,
                customNavStyle: customNavStyle,
                row: data,
                withoutTabIndex: this.props.withoutTabIndex },
              columnChild
            );
          }
        }, this);
        var key = data[this.props.keyField];
        var disable = unselectable.indexOf(key) !== -1;
        var selected = this.props.selectedRowKeys.indexOf(key) !== -1;
        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r, data) : null;
        var expandedRowColumn = this.renderExpandRowColumn(this.props.expandableRow && this.props.expandableRow(data), this.props.expanding.indexOf(key) > -1, ExpandColumnCustomComponent, r, data);
        var haveExpandContent = this.props.expandableRow && this.props.expandableRow(data);
        var isExpanding = haveExpandContent && this.props.expanding.indexOf(key) > -1;

        // add by bluespring for className customize
        var trClassName = this.props.trClassName;
        if (_util2.default.isFunction(this.props.trClassName)) {
          trClassName = this.props.trClassName(data, r);
        }
        if (isExpanding && this.props.expandParentClass) {
          trClassName += _util2.default.isFunction(this.props.expandParentClass) ? this.props.expandParentClass(data, r) : this.props.expandParentClass;
        }
        var result = [_react2.default.createElement(
          _TableRow2.default,
          { isSelected: selected, key: key, className: trClassName,
            index: r,
            row: data,
            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
            enableCellEdit: cellEdit.mode !== _Const2.default.CELL_EDIT_NONE,
            onRowClick: this.handleRowClick,
            onRowDoubleClick: this.handleRowDoubleClick,
            onRowMouseOver: this.handleRowMouseOver,
            onRowMouseOut: this.handleRowMouseOut,
            onSelectRow: this.handleSelectRow,
            onExpandRow: this.handleClickCell,
            unselectableRow: disable,
            style: trStyle },
          this.props.expandColumnOptions.expandColumnVisible && this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          selectRowColumn,
          this.props.expandColumnOptions.expandColumnVisible && !this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
          tableColumns
        )];

        if (haveExpandContent) {
          var expandBodyClass = _util2.default.isFunction(this.props.expandBodyClass) ? this.props.expandBodyClass(data, r, isExpanding) : this.props.expandBodyClass;
          result.push(_react2.default.createElement(
            _ExpandComponent2.default,
            {
              key: key + '-expand',
              row: data,
              className: expandBodyClass,
              bgColor: this.props.expandRowBgColor || this.props.selectRow.bgColor || undefined,
              hidden: !isExpanding,
              colSpan: expandColSpan,
              width: "100%" },
            this.props.expandComponent(data)
          ));
        }
        return result;
      }, this);

      if (tableRows.length === 0 && !this.props.withoutNoDataText) {
        var colSpan = this.props.columns.filter(function (c) {
          return !c.hidden;
        }).length + (isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? 1 : 0) + (this.props.expandColumnOptions.expandColumnVisible ? 1 : 0);
        tableRows = [_react2.default.createElement(
          _TableRow2.default,
          { key: '##table-empty##', style: trStyle },
          _react2.default.createElement(
            'td',
            { 'data-toggle': 'collapse',
              colSpan: colSpan,
              className: 'react-bs-table-no-data' },
            this.props.noDataText || _Const2.default.NO_DATA_TEXT
          )
        )];
      }

      return _react2.default.createElement(
        'div',
        { ref: 'container',
          className: (0, _classnames2.default)('react-bs-container-body', this.props.bodyContainerClass),
          style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(tableHeader, { ref: 'header' }),
          _react2.default.createElement(
            'tbody',
            { ref: 'tbody' },
            tableRows
          )
        )
      );
    }
  }, {
    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
    value: function __handleCellKeyDown__REACT_HOT_LOADER__(e, lastEditCell) {
      e.preventDefault();
      var _props2 = this.props,
          keyBoardNav = _props2.keyBoardNav,
          onNavigateCell = _props2.onNavigateCell,
          cellEdit = _props2.cellEdit;

      var offset = void 0;
      if (e.keyCode === 37) {
        offset = { x: -1, y: 0 };
      } else if (e.keyCode === 38) {
        offset = { x: 0, y: -1 };
      } else if (e.keyCode === 39 || e.keyCode === 9) {
        offset = { x: 1, y: 0 };
        if (e.keyCode === 9 && lastEditCell) {
          offset = _extends({}, offset, {
            lastEditCell: lastEditCell
          });
        }
      } else if (e.keyCode === 40) {
        offset = { x: 0, y: 1 };
      } else if (e.keyCode === 13) {
        var enterToEdit = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToEdit : false;
        var enterToExpand = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToExpand : false;

        if (cellEdit && enterToEdit) {
          this.handleEditCell(e.target.parentElement.rowIndex + 1, e.currentTarget.cellIndex, '', e);
        }

        if (enterToExpand) {
          this.handleClickCell(this.props.y + 1, this.props.x);
        }
      }
      if (offset && keyBoardNav) {
        onNavigateCell(offset);
      }
    }
  }, {
    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
    value: function __handleRowMouseOut__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOut(targetRow, event);
    }
  }, {
    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
    value: function __handleRowMouseOver__REACT_HOT_LOADER__(rowIndex, event) {
      var targetRow = this.props.data[rowIndex];
      this.props.onRowMouseOver(targetRow, event);
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(rowIndex, cellIndex) {
      var onRowClick = this.props.onRowClick;

      if (this._isSelectRowDefined()) cellIndex--;
      if (this._isExpandColumnVisible()) cellIndex--;
      onRowClick(this.props.data[rowIndex - 1], rowIndex - 1, cellIndex);
    }
  }, {
    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(rowIndex) {
      var onRowDoubleClick = this.props.onRowDoubleClick;

      var targetRow = this.props.data[rowIndex];
      onRowDoubleClick(targetRow);
    }
  }, {
    key: '__handleSelectRow__REACT_HOT_LOADER__',
    value: function __handleSelectRow__REACT_HOT_LOADER__(rowIndex, isSelected, e) {
      var selectedRow = void 0;
      var _props3 = this.props,
          data = _props3.data,
          onSelectRow = _props3.onSelectRow;

      data.forEach(function (row, i) {
        if (i === rowIndex - 1) {
          selectedRow = row;
          return false;
        }
      });
      onSelectRow(selectedRow, isSelected, e, rowIndex - 1);
    }
  }, {
    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__(e, rowIndex) {
      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
        this.handleSelectRow(rowIndex + 1, e.currentTarget.checked, e);
      }
    }
  }, {
    key: '__handleClickCell__REACT_HOT_LOADER__',
    value: function __handleClickCell__REACT_HOT_LOADER__(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var _props4 = this.props,
          columns = _props4.columns,
          keyField = _props4.keyField,
          expandBy = _props4.expandBy,
          expandableRow = _props4.expandableRow,
          _props4$selectRow = _props4.selectRow,
          clickToExpand = _props4$selectRow.clickToExpand,
          hideSelectColumn = _props4$selectRow.hideSelectColumn,
          onlyOneExpanding = _props4.onlyOneExpanding;

      var selectRowAndExpand = this._isSelectRowDefined() && !clickToExpand ? false : true;
      columnIndex = this._isSelectRowDefined() && !hideSelectColumn ? columnIndex - 1 : columnIndex;
      columnIndex = this._isExpandColumnVisible() ? columnIndex - 1 : columnIndex;
      if (expandableRow && selectRowAndExpand && (expandBy === _Const2.default.EXPAND_BY_ROW ||
      /* Below will allow expanding trigger by clicking on selection column
      if configure as expanding by column */
      expandBy === _Const2.default.EXPAND_BY_COL && columnIndex < 0 || expandBy === _Const2.default.EXPAND_BY_COL && columns[columnIndex].expandable)) {
        var expanding = this.props.expanding;
        var rowKey = this.props.data[rowIndex - 1][keyField];
        var isRowExpanding = expanding.indexOf(rowKey) > -1;

        if (isRowExpanding) {
          // collapse
          expanding = expanding.filter(function (k) {
            return k !== rowKey;
          });
        } else {
          // expand
          if (onlyOneExpanding) expanding = [rowKey];else expanding.push(rowKey);
        }
        this.props.onExpand(expanding, rowKey, isRowExpanding);
      }
    }
  }, {
    key: '__handleEditCell__REACT_HOT_LOADER__',
    value: function __handleEditCell__REACT_HOT_LOADER__(rowIndex, columnIndex, action, e) {
      var selectRow = this.props.selectRow;

      var defineSelectRow = this._isSelectRowDefined();
      var expandColumnVisible = this._isExpandColumnVisible();
      if (defineSelectRow) {
        columnIndex--;
        if (selectRow.hideSelectColumn) columnIndex++;
      }
      if (expandColumnVisible) {
        columnIndex--;
      }
      rowIndex--;

      if (action === 'tab') {
        if (defineSelectRow && !selectRow.hideSelectColumn) columnIndex++;
        if (expandColumnVisible) columnIndex++;
        this.handleCompleteEditCell(e.target.value, rowIndex, columnIndex - 1);
        if (columnIndex >= this.props.columns.length) {
          this.handleCellKeyDown(e, true);
        } else {
          this.handleCellKeyDown(e);
        }

        var _nextEditableCell = this.nextEditableCell(rowIndex, columnIndex),
            nextRIndex = _nextEditableCell.nextRIndex,
            nextCIndex = _nextEditableCell.nextCIndex;

        rowIndex = nextRIndex;
        columnIndex = nextCIndex;
      }

      var stateObj = {
        currEditCell: {
          rid: rowIndex,
          cid: columnIndex
        }
      };

      if (this.props.selectRow.clickToSelectAndEditCell && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        var selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) !== -1;
        this.handleSelectRow(rowIndex + 1, !selected, e);
      }
      this.setState(function () {
        return stateObj;
      });
    }
  }, {
    key: '__nextEditableCell__REACT_HOT_LOADER__',
    value: function __nextEditableCell__REACT_HOT_LOADER__(rIndex, cIndex) {
      var keyField = this.props.keyField;

      var nextRIndex = rIndex;
      var nextCIndex = cIndex;
      var row = void 0;
      var column = void 0;
      do {
        if (nextCIndex >= this.props.columns.length) {
          nextRIndex++;
          nextCIndex = 0;
        }
        row = this.props.data[nextRIndex];
        column = this.props.columns[nextCIndex];
        if (!row) break;
        var editable = column.editable;
        if (_util2.default.isFunction(column.editable)) {
          editable = column.editable(column, row, nextRIndex, nextCIndex);
        }
        if (editable && editable.readOnly !== true && !column.hidden && keyField !== column.name) {
          break;
        } else {
          nextCIndex++;
        }
      } while (row);
      return { nextRIndex: nextRIndex, nextCIndex: nextCIndex };
    }
  }, {
    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
    value: function __handleCompleteEditCell__REACT_HOT_LOADER__(newVal, rowIndex, columnIndex) {
      if (newVal !== null) {
        var result = this.props.onEditCell(newVal, rowIndex, columnIndex);
        if (result !== _Const2.default.AWAIT_BEFORE_CELL_EDIT) {
          this.setState(function () {
            return { currEditCell: null };
          });
        }
      } else {
        this.setState(function () {
          return { currEditCell: null };
        });
      }
    }
  }, {
    key: '__cancelEditCell__REACT_HOT_LOADER__',
    value: function __cancelEditCell__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { currEditCell: null };
      });
    }
  }, {
    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__(e, isSelect, rowIndex, row) {
      e.stopPropagation();
      if (e.target.tagName === 'TD' && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
        var unselectable = this.props.selectRow.unselectable || [];
        if (unselectable.indexOf(row[this.props.keyField]) === -1) {
          this.handleSelectRow(rowIndex + 1, isSelect, e);
          this.handleClickCell(rowIndex + 1);
        }
      }
    }
  }, {
    key: 'renderSelectRowColumn',
    value: function renderSelectRowColumn(selected, inputType, disabled) {
      var CustomComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var _this2 = this;

      var rowIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var row = arguments[5];

      return _react2.default.createElement(
        'td',
        { onClick: function onClick(e) {
            _this2.handleClickonSelectColumn(e, !selected, rowIndex, row);
          }, style: { textAlign: 'center' } },
        CustomComponent ? _react2.default.createElement(CustomComponent, { type: inputType, checked: selected, disabled: disabled,
          rowIndex: rowIndex,
          onChange: function onChange(e) {
            return _this2.handleSelectRowColumChange(e, rowIndex);
          } }) : _react2.default.createElement('input', { type: inputType, checked: selected, disabled: disabled,
          onChange: function onChange(e) {
            return _this2.handleSelectRowColumChange(e, rowIndex);
          } })
      );
    }
  }, {
    key: 'renderExpandRowColumn',
    value: function renderExpandRowColumn(isExpandableRow, isExpanded, CustomComponent) {
      var _this3 = this;

      var rowIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var content = null;
      if (CustomComponent) {
        content = _react2.default.createElement(CustomComponent, { isExpandableRow: isExpandableRow, isExpanded: isExpanded });
      } else if (isExpandableRow) {
        content = isExpanded ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-minus' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' });
      } else {
        content = ' ';
      }

      return _react2.default.createElement(
        'td',
        {
          className: 'react-bs-table-expand-cell',
          onClick: function onClick() {
            return _this3.handleClickCell(rowIndex + 1);
          } },
        content
      );
    }
  }, {
    key: '_isSelectRowDefined',
    value: function _isSelectRowDefined() {
      return this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || this.props.selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
    }
  }, {
    key: '_isExpandColumnVisible',
    value: function _isExpandColumnVisible() {
      return this.props.expandColumnOptions.expandColumnVisible;
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.refs.header.childNodes;
    }
  }]);

  return TableBody;
}(_react.Component);

TableBody.propTypes = {
  data: _react.PropTypes.array,
  columns: _react.PropTypes.array,
  striped: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  hover: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  keyField: _react.PropTypes.string,
  selectedRowKeys: _react.PropTypes.array,
  onRowClick: _react.PropTypes.func,
  onRowDoubleClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  withoutNoDataText: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  tableBodyClass: _react.PropTypes.string,
  bodyContainerClass: _react.PropTypes.string,
  expandableRow: _react.PropTypes.func,
  expandComponent: _react.PropTypes.func,
  expandRowBgColor: _react.PropTypes.string,
  expandBy: _react.PropTypes.string,
  expanding: _react.PropTypes.array,
  onExpand: _react.PropTypes.func,
  expandBodyClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  expandParentClass: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  onlyOneExpanding: _react.PropTypes.bool,
  beforeShowError: _react.PropTypes.func,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  x: _react.PropTypes.number,
  y: _react.PropTypes.number,
  onNavigateCell: _react.PropTypes.func,
  withoutTabIndex: _react.PropTypes.bool
};
var _default = TableBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableBody, 'TableBody', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableBody.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableBody.js');
}();

;

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Component) {
  _inherits(TableColumn, _Component);

  function TableColumn(props) {
    _classCallCheck(this, TableColumn);

    var _this = _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).call(this, props));

    _this.handleCellEdit = function () {
      return _this.__handleCellEdit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCellClick = function () {
      return _this.__handleCellClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleKeyDown = function () {
      return _this.__handleKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    return _this;
  }
  /* eslint no-unused-vars: [0, { "args": "after-used" }] */


  _createClass(TableColumn, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var children = this.props.children;

      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || this.props.isFocus !== nextProps.isFocus || (typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== _typeof(nextProps.children) || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children !== null && children.props !== null) {
        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked || children.props.disabled !== nextProps.children.props.disabled;
        } else {
          shouldUpdated = true;
        }
      } else {
        shouldUpdated = shouldUpdated || children !== nextProps.children;
      }

      if (shouldUpdated) {
        return shouldUpdated;
      }

      if (!(this.props.cellEdit && nextProps.cellEdit)) {
        return false;
      } else {
        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: '__handleCellEdit__REACT_HOT_LOADER__',
    value: function __handleCellEdit__REACT_HOT_LOADER__(e) {
      if (this.props.cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else if (window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
        }
      }
      this.props.onEdit(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
      if (this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
        this.props.onClick(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
      }
    }
  }, {
    key: '__handleCellClick__REACT_HOT_LOADER__',
    value: function __handleCellClick__REACT_HOT_LOADER__(e) {
      var _props = this.props,
          onClick = _props.onClick,
          rIndex = _props.rIndex;

      if (onClick) {
        onClick(rIndex + 1, e.currentTarget.cellIndex, e);
      }
    }
  }, {
    key: '__handleKeyDown__REACT_HOT_LOADER__',
    value: function __handleKeyDown__REACT_HOT_LOADER__(e) {
      if (this.props.keyBoardNav) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          columnTitle = _props2.columnTitle,
          dataAlign = _props2.dataAlign,
          hidden = _props2.hidden,
          cellEdit = _props2.cellEdit,
          attrs = _props2.attrs,
          style = _props2.style,
          isFocus = _props2.isFocus,
          keyBoardNav = _props2.keyBoardNav,
          tabIndex = _props2.tabIndex,
          customNavStyle = _props2.customNavStyle,
          withoutTabIndex = _props2.withoutTabIndex,
          row = _props2.row;
      var className = this.props.className;


      var tdStyle = _extends({
        textAlign: dataAlign,
        display: hidden ? 'none' : null
      }, style);

      var opts = {};

      if (cellEdit) {
        if (cellEdit.mode === _Const2.default.CELL_EDIT_CLICK) {
          opts.onClick = this.handleCellEdit;
        } else if (cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
          opts.onDoubleClick = this.handleCellEdit;
        } else {
          opts.onClick = this.handleCellClick;
        }
      }

      if (keyBoardNav && isFocus) {
        opts.onKeyDown = this.handleKeyDown;
      }

      if (isFocus) {
        if (customNavStyle) {
          var cusmtStyle = _util2.default.isFunction(customNavStyle) ? customNavStyle(children, row) : customNavStyle;
          tdStyle = _extends({}, tdStyle, cusmtStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      var attr = {};
      if (!withoutTabIndex) attr.tabIndex = tabIndex;
      return _react2.default.createElement(
        'td',
        _extends({}, attr, { style: tdStyle,
          title: columnTitle,
          className: className
        }, opts, attrs),
        typeof children === 'boolean' ? children.toString() : children
      );
    }
  }]);

  return TableColumn;
}(_react.Component);

TableColumn.propTypes = {
  rIndex: _react.PropTypes.number,
  dataAlign: _react.PropTypes.string,
  hidden: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  columnTitle: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  attrs: _react.PropTypes.object,
  style: _react.PropTypes.object,
  isFocus: _react.PropTypes.bool,
  onKeyDown: _react.PropTypes.func,
  tabIndex: _react.PropTypes.string,
  withoutTabIndex: _react.PropTypes.bool,
  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  customNavStyle: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]),
  row: _react.PropTypes.any /* only used on custom styling for navigation */
};

TableColumn.defaultProps = {
  dataAlign: 'left',
  withoutTabIndex: false,
  hidden: false,
  className: '',
  isFocus: false,
  keyBoardNav: false
};
var _default = TableColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableColumn, 'TableColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableColumn.js');
}();

;

/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Editor = __webpack_require__(1290);

var _Editor2 = _interopRequireDefault(_Editor);

var _Notification = __webpack_require__(1291);

var _Notification2 = _interopRequireDefault(_Notification);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableEditColumn = function (_Component) {
  _inherits(TableEditColumn, _Component);

  function TableEditColumn(props) {
    _classCallCheck(this, TableEditColumn);

    var _this = _possibleConstructorReturn(this, (TableEditColumn.__proto__ || Object.getPrototypeOf(TableEditColumn)).call(this, props));

    _this.handleKeyPress = function () {
      return _this.__handleKeyPress__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleBlur = function () {
      return _this.__handleBlur__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleCustomUpdate = function () {
      return _this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.notifyToastr = function () {
      return _this.__notifyToastr__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClick = function () {
      return _this.__handleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    var _this$props = _this.props,
        fieldValue = _this$props.fieldValue,
        row = _this$props.row,
        className = _this$props.className;

    _this.focusInEditor = _this.focusInEditor.bind(_this);
    _this.state = {
      shakeEditor: false,
      className: _util2.default.isFunction(className) ? className(fieldValue, row) : className
    };
    return _this;
  }

  _createClass(TableEditColumn, [{
    key: 'valueShortCircuit',
    value: function valueShortCircuit(value) {
      return value === null || typeof value === 'undefined' ? '' : value;
    }
  }, {
    key: '__handleKeyPress__REACT_HOT_LOADER__',
    value: function __handleKeyPress__REACT_HOT_LOADER__(e) {
      if (e.keyCode === 13 || e.keyCode === 9) {
        // Pressed ENTER
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;

        if (!this.validator(value)) {
          return;
        }
        if (e.keyCode === 13) {
          this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
        } else {
          this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
          e.preventDefault();
        }
      } else if (e.keyCode === 27) {
        this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
      } else if (e.type === 'click' && !this.props.blurToSave) {
        // textarea click save button
        var _value = e.target.parentElement.firstChild.value;
        if (!this.validator(_value)) {
          return;
        }
        this.props.completeEdit(_value, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function __handleBlur__REACT_HOT_LOADER__(e) {
      e.stopPropagation();
      if (this.props.blurToSave) {
        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
        if (!this.validator(value)) {
          return false;
        }
        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
      }
    }
  }, {
    key: '__handleCustomUpdate__REACT_HOT_LOADER__',


    // modified by iuculanop
    // BEGIN
    value: function __handleCustomUpdate__REACT_HOT_LOADER__(value) {
      if (!this.validator(value)) {
        return;
      }
      this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
    }
  }, {
    key: 'validator',
    value: function validator(value) {
      var ts = this;
      var valid = true;
      if (ts.props.editable.validator) {
        var checkVal = ts.props.editable.validator(value, this.props.row);
        var responseType = typeof checkVal === 'undefined' ? 'undefined' : _typeof(checkVal);
        if (responseType !== 'object' && checkVal !== true) {
          valid = false;
          this.notifyToastr('error', checkVal, _Const2.default.CANCEL_TOASTR);
        } else if (responseType === 'object' && checkVal.isValid !== true) {
          valid = false;
          this.notifyToastr(checkVal.notification.type, checkVal.notification.msg, checkVal.notification.title);
        }
        if (!valid) {
          // animate input
          ts.clearTimeout();
          var _props = this.props,
              invalidColumnClassName = _props.invalidColumnClassName,
              row = _props.row;

          var className = _util2.default.isFunction(invalidColumnClassName) ? invalidColumnClassName(value, row) : invalidColumnClassName;
          ts.setState({ shakeEditor: true, className: className });
          ts.timeouteClear = setTimeout(function () {
            ts.setState({ shakeEditor: false });
          }, 300);
          this.focusInEditor();
          return valid;
        }
      }
      return valid;
    }
    // END

  }, {
    key: '__notifyToastr__REACT_HOT_LOADER__',
    value: function __notifyToastr__REACT_HOT_LOADER__(type, message, title) {
      var toastr = true;
      var beforeShowError = this.props.beforeShowError;

      if (beforeShowError) {
        toastr = beforeShowError(type, message, title);
      }
      if (toastr) {
        this.refs.notifier.notice(type, message, title);
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear !== 0) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focusInEditor();
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var dom = _reactDom2.default.findDOMNode(this);
      if (this.props.isFocus) {
        dom.focus();
      } else {
        dom.blur();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'focusInEditor',
    value: function focusInEditor() {
      if (_util2.default.isFunction(this.refs.inputRef.focus)) {
        this.refs.inputRef.focus();
      }
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'TD') {
        e.stopPropagation();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          editable = _props2.editable,
          format = _props2.format,
          customEditor = _props2.customEditor,
          isFocus = _props2.isFocus,
          customStyleWithNav = _props2.customStyleWithNav,
          row = _props2.row;
      var shakeEditor = this.state.shakeEditor;

      var attr = {
        ref: 'inputRef',
        onKeyDown: this.handleKeyPress,
        onBlur: this.handleBlur
      };
      var style = { position: 'relative' };
      var fieldValue = this.props.fieldValue;
      var className = this.state.className;
      // put placeholder if exist

      editable.placeholder && (attr.placeholder = editable.placeholder);

      var editorClass = (0, _classnames2.default)({ 'animated': shakeEditor, 'shake': shakeEditor });
      fieldValue = fieldValue === 0 ? '0' : fieldValue;
      var cellEditor = void 0;
      if (customEditor) {
        var customEditorProps = _extends({
          row: row
        }, attr, {
          defaultValue: this.valueShortCircuit(fieldValue)
        }, customEditor.customEditorParameters);
        cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
      } else {
        cellEditor = (0, _Editor2.default)(editable, attr, format, editorClass, this.valueShortCircuit(fieldValue));
      }

      if (isFocus) {
        if (customStyleWithNav) {
          var customStyle = _util2.default.isFunction(customStyleWithNav) ? customStyleWithNav(fieldValue, row) : customStyleWithNav;
          style = _extends({}, style, customStyle);
        } else {
          className = className + ' default-focus-cell';
        }
      }

      return _react2.default.createElement(
        'td',
        { ref: 'td',
          style: style,
          className: className,
          onClick: this.handleClick },
        cellEditor,
        _react2.default.createElement(_Notification2.default, { ref: 'notifier' })
      );
    }
  }, {
    key: '_getCheckBoxValue',
    value: function _getCheckBoxValue(e) {
      var value = '';
      var values = e.currentTarget.value.split(':');
      value = e.currentTarget.checked ? values[0] : values[1];
      return value;
    }
  }]);

  return TableEditColumn;
}(_react.Component);

TableEditColumn.propTypes = {
  completeEdit: _react.PropTypes.func,
  rowIndex: _react.PropTypes.number,
  colIndex: _react.PropTypes.number,
  blurToSave: _react.PropTypes.bool,
  editable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  row: _react.PropTypes.any,
  fieldValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array, _react.PropTypes.object]),
  className: _react.PropTypes.any,
  beforeShowError: _react.PropTypes.func,
  isFocus: _react.PropTypes.bool,
  customStyleWithNav: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])
};

var _default = TableEditColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableEditColumn, 'TableEditColumn', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableEditColumn.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableEditColumn.js');
}();

;

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFilter = function (_Component) {
  _inherits(TableFilter, _Component);

  function TableFilter(props) {
    _classCallCheck(this, TableFilter);

    var _this = _possibleConstructorReturn(this, (TableFilter.__proto__ || Object.getPrototypeOf(TableFilter)).call(this, props));

    _this.handleKeyUp = function () {
      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.filterObj = {};
    return _this;
  }

  _createClass(TableFilter, [{
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(e) {
      var _e$currentTarget = e.currentTarget,
          value = _e$currentTarget.value,
          name = _e$currentTarget.name;

      if (value.trim() === '') {
        delete this.filterObj[name];
      } else {
        this.filterObj[name] = value;
      }
      this.props.onFilter(this.filterObj);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          striped = _props.striped,
          condensed = _props.condensed,
          rowSelectType = _props.rowSelectType,
          columns = _props.columns;

      var tableClasses = (0, _classnames2.default)('table', {
        'table-striped': striped,
        'table-condensed': condensed
      });
      var selectRowHeader = null;

      if (rowSelectType === _Const2.default.ROW_SELECT_SINGLE || rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
        var style = {
          width: 35,
          paddingLeft: 0,
          paddingRight: 0
        };
        selectRowHeader = _react2.default.createElement(
          'th',
          { style: style, key: -1 },
          'Filter'
        );
      }

      var filterField = columns.map(function (column) {
        var hidden = column.hidden,
            width = column.width,
            name = column.name;

        var thStyle = {
          display: hidden ? 'none' : null,
          width: width
        };
        return _react2.default.createElement(
          'th',
          { key: name, style: thStyle },
          _react2.default.createElement(
            'div',
            { className: 'th-inner table-header-column' },
            _react2.default.createElement('input', { size: '10', type: 'text',
              placeholder: name, name: name, onKeyUp: this.handleKeyUp })
          )
        );
      }, this);

      return _react2.default.createElement(
        'table',
        { className: tableClasses, style: { marginTop: 5 } },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            { style: { borderBottomStyle: 'hidden' } },
            selectRowHeader,
            filterField
          )
        )
      );
    }
  }]);

  return TableFilter;
}(_react.Component);

TableFilter.propTypes = {
  columns: _react.PropTypes.array,
  rowSelectType: _react.PropTypes.string,
  onFilter: _react.PropTypes.func
};
var _default = TableFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFilter, 'TableFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableFilter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableFilter.js');
}();

;

/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectRowHeaderColumn = __webpack_require__(1451);

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

var _ExpandRowHeaderColumn = __webpack_require__(1449);

var _ExpandRowHeaderColumn2 = _interopRequireDefault(_ExpandRowHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update(this.props.checked);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.update(props.checked);
    }
  }, {
    key: 'update',
    value: function update(checked) {
      _reactDom2.default.findDOMNode(this).indeterminate = checked === 'indeterminate';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: 'react-bs-select-all',
        type: 'checkbox',
        checked: this.props.checked,
        onChange: this.props.onChange });
    }
  }]);

  return Checkbox;
}(_react.Component);

function getSortOrder(sortList, field, enableSort) {
  if (!enableSort) return undefined;
  var result = sortList.filter(function (sortObj) {
    return sortObj.sortField === field;
  });
  if (result.length > 0) {
    return result[0].order;
  } else {
    return undefined;
  }
}

var TableHeader = function (_Component2) {
  _inherits(TableHeader, _Component2);

  function TableHeader() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call.apply(_ref, [this].concat(args))), _this2), _this2.getHeaderColGrouop = function () {
      var _this3;

      return (_this3 = _this2).__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(TableHeader, [{
    key: 'render',
    value: function render() {
      var containerClasses = (0, _classnames2.default)('react-bs-container-header', 'table-header-wrapper', this.props.headerContainerClass);
      var tableClasses = (0, _classnames2.default)('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableHeaderClass);

      var rowCount = Math.max.apply(Math, _toConsumableArray(_react2.default.Children.map(this.props.children, function (elm) {
        return elm && elm.props.row ? Number(elm.props.row) : 0;
      })));

      var rows = [];
      var rowKey = 0;

      rows[0] = [];
      rows[0].push([this.props.expandColumnVisible && this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { rowCount: rowCount + 1 })], [this.renderSelectRowHeader(rowCount + 1, rowKey++)], [this.props.expandColumnVisible && !this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(_ExpandRowHeaderColumn2.default, { rowCount: rowCount + 1 })]);
      var _props = this.props,
          sortIndicator = _props.sortIndicator,
          sortList = _props.sortList,
          onSort = _props.onSort,
          reset = _props.reset;


      _react2.default.Children.forEach(this.props.children, function (elm) {
        if (elm === null || elm === undefined) {
          // Skip null or undefined elements.
          return;
        }
        var _elm$props = elm.props,
            dataField = _elm$props.dataField,
            dataSort = _elm$props.dataSort;

        var sort = getSortOrder(sortList, dataField, dataSort);
        var rowIndex = elm.props.row ? Number(elm.props.row) : 0;
        var rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
        if (rows[rowIndex] === undefined) {
          rows[rowIndex] = [];
        }
        if (rowSpan + rowIndex === rowCount + 1) {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { reset: reset, key: rowKey++, onSort: onSort, sort: sort, sortIndicator: sortIndicator, isOnlyHead: false }));
        } else {
          rows[rowIndex].push(_react2.default.cloneElement(elm, { key: rowKey++, isOnlyHead: true }));
        }
      });

      var trs = rows.map(function (row, indexRow) {
        return _react2.default.createElement(
          'tr',
          { key: indexRow },
          row
        );
      });

      return _react2.default.createElement(
        'div',
        { ref: 'container', className: containerClasses, style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(this.props.colGroups, { ref: 'headerGrp' }),
          _react2.default.createElement(
            'thead',
            { ref: 'header' },
            trs
          )
        )
      );
    }
  }, {
    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
      return this.refs.headerGrp.childNodes;
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader(rowCount, rowKey) {
      if (this.props.hideSelectColumn) {
        return null;
      } else if (this.props.customComponent) {
        var CustomComponent = this.props.customComponent;
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(CustomComponent, { type: 'checkbox', checked: this.props.isSelectAll,
            indeterminate: this.props.isSelectAll === 'indeterminate', disabled: false,
            onChange: this.props.onSelectAllRow, rowIndex: 'Header' })
        );
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_SINGLE) {
        return _react2.default.createElement(_SelectRowHeaderColumn2.default, { key: rowKey, rowCount: rowCount });
      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
        return _react2.default.createElement(
          _SelectRowHeaderColumn2.default,
          { key: rowKey, rowCount: rowCount },
          _react2.default.createElement(Checkbox, {
            onChange: this.props.onSelectAllRow,
            checked: this.props.isSelectAll })
        );
      } else {
        return null;
      }
    }
  }]);

  return TableHeader;
}(_react.Component);

TableHeader.propTypes = {
  headerContainerClass: _react.PropTypes.string,
  tableHeaderClass: _react.PropTypes.string,
  style: _react.PropTypes.object,
  rowSelectType: _react.PropTypes.string,
  onSort: _react.PropTypes.func,
  onSelectAllRow: _react.PropTypes.func,
  sortList: _react.PropTypes.array,
  hideSelectColumn: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  isFiltered: _react.PropTypes.bool,
  isSelectAll: _react.PropTypes.oneOf([true, 'indeterminate', false]),
  sortIndicator: _react.PropTypes.bool,
  customComponent: _react.PropTypes.func,
  colGroups: _react.PropTypes.element,
  reset: _react.PropTypes.bool,
  expandColumnVisible: _react.PropTypes.bool,
  expandColumnComponent: _react.PropTypes.func,
  expandColumnBeforeSelectColumn: _react.PropTypes.bool
};

var _default = TableHeader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(getSortOrder, 'getSortOrder', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(TableHeader, 'TableHeader', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableHeader.js');
}();

;

/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-nested-ternary: 0 */


var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow(props) {
    _classCallCheck(this, TableRow);

    var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

    _this.rowClick = function () {
      return _this.__rowClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.expandRow = function () {
      return _this.__expandRow__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowDoubleClick = function () {
      return _this.__rowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOut = function () {
      return _this.__rowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.rowMouseOver = function () {
      return _this.__rowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clickNum = 0;
    return _this;
  }

  _createClass(TableRow, [{
    key: '__rowClick__REACT_HOT_LOADER__',
    value: function __rowClick__REACT_HOT_LOADER__(e) {
      var _this2 = this;

      var rowIndex = this.props.index + 1;
      var cellIndex = e.target.cellIndex;
      if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
      var _props = this.props,
          selectRow = _props.selectRow,
          unselectableRow = _props.unselectableRow,
          isSelected = _props.isSelected,
          onSelectRow = _props.onSelectRow,
          onExpandRow = _props.onExpandRow;

      if (selectRow) {
        if (selectRow.clickToSelect && !unselectableRow) {
          onSelectRow(rowIndex, !isSelected, e);
        } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
          this.clickNum++;
          /** if clickToSelectAndEditCell is enabled,
           *  there should be a delay to prevent a selection changed when
           *  user dblick to edit cell on same row but different cell
          **/
          setTimeout(function () {
            if (_this2.clickNum === 1) {
              onSelectRow(rowIndex, !isSelected, e);
              onExpandRow(rowIndex, cellIndex);
            }
            _this2.clickNum = 0;
          }, 200);
        } else {
          this.expandRow(rowIndex, cellIndex);
        }
      }
    }
  }, {
    key: '__expandRow__REACT_HOT_LOADER__',
    value: function __expandRow__REACT_HOT_LOADER__(rowIndex, cellIndex) {
      var _this3 = this;

      this.clickNum++;
      setTimeout(function () {
        if (_this3.clickNum === 1) {
          _this3.props.onExpandRow(rowIndex, cellIndex);
        }
        _this3.clickNum = 0;
      }, 200);
    }
  }, {
    key: '__rowDoubleClick__REACT_HOT_LOADER__',
    value: function __rowDoubleClick__REACT_HOT_LOADER__(e) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
        if (this.props.onRowDoubleClick) {
          this.props.onRowDoubleClick(this.props.index);
        }
      }
    }
  }, {
    key: '__rowMouseOut__REACT_HOT_LOADER__',
    value: function __rowMouseOut__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOut) {
        this.props.onRowMouseOut(rowIndex, e);
      }
    }
  }, {
    key: '__rowMouseOver__REACT_HOT_LOADER__',
    value: function __rowMouseOver__REACT_HOT_LOADER__(e) {
      var rowIndex = this.props.index;
      if (this.props.onRowMouseOver) {
        this.props.onRowMouseOver(rowIndex, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.clickNum = 0;
      var _props2 = this.props,
          selectRow = _props2.selectRow,
          row = _props2.row,
          isSelected = _props2.isSelected,
          className = _props2.className,
          index = _props2.index;
      var style = this.props.style;

      var backgroundColor = null;
      var selectRowClass = null;

      if (selectRow) {
        backgroundColor = _util2.default.isFunction(selectRow.bgColor) ? selectRow.bgColor(row, isSelected) : isSelected ? selectRow.bgColor : null;

        selectRowClass = _util2.default.isFunction(selectRow.className) ? selectRow.className(row, isSelected) : isSelected ? selectRow.className : null;
      }

      if (_util2.default.isFunction(style)) {
        style = style(row, index);
      } else {
        style = _extends({}, style) || {};
      }
      // the bgcolor of row selection always overwrite the bgcolor defined by global.
      if (style && backgroundColor && isSelected) {
        style.backgroundColor = backgroundColor;
      }
      var trCss = {
        style: _extends({}, style),
        className: (0, _classnames2.default)(selectRowClass, className)
      };

      return _react2.default.createElement(
        'tr',
        _extends({}, trCss, {
          onMouseOver: this.rowMouseOver,
          onMouseOut: this.rowMouseOut,
          onClick: this.rowClick,
          onDoubleClick: this.rowDoubleClick }),
        this.props.children
      );
    }
  }]);

  return TableRow;
}(_react.Component);

TableRow.propTypes = {
  index: _react.PropTypes.number,
  row: _react.PropTypes.any,
  style: _react.PropTypes.any,
  isSelected: _react.PropTypes.bool,
  enableCellEdit: _react.PropTypes.bool,
  onRowClick: _react.PropTypes.func,
  onRowDoubleClick: _react.PropTypes.func,
  onSelectRow: _react.PropTypes.func,
  onExpandRow: _react.PropTypes.func,
  onRowMouseOut: _react.PropTypes.func,
  onRowMouseOver: _react.PropTypes.func,
  unselectableRow: _react.PropTypes.bool
};
TableRow.defaultProps = {
  onRowClick: undefined,
  onRowDoubleClick: undefined
};
var _default = TableRow;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableRow, 'TableRow', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableRow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/TableRow.js');
}();

;

/***/ }),

/***/ 1458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_util2.default.canUseDOM()) {
  var filesaver = __webpack_require__(1459);
  var saveAs = filesaver.saveAs;
} /* eslint block-scoped-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint no-var: 0 */
/* eslint no-unused-vars: 0 */


function toString(data, keys, separator, excludeCSVHeader) {
  var dataString = '';
  if (data.length === 0) return dataString;

  var headCells = [];
  var rowCount = 0;
  keys.forEach(function (key) {
    if (key.row > rowCount) {
      rowCount = key.row;
    }
    // rowCount += (key.rowSpan + key.colSpan - 1);
    for (var index = 0; index < key.colSpan; index++) {
      headCells.push(key);
    }
  });

  var firstRow = excludeCSVHeader ? 1 : 0;

  var _loop = function _loop(i) {
    dataString += headCells.map(function (x) {
      if (x.row + (x.rowSpan - 1) === i) {
        return x.header;
      }
      if (x.row === i && x.rowSpan > 1) {
        return '';
      }
    }).filter(function (key) {
      return typeof key !== 'undefined';
    }).join(separator) + '\n';
  };

  for (var i = firstRow; i <= rowCount; i++) {
    _loop(i);
  }

  keys = keys.filter(function (key) {
    return key.field !== undefined;
  });

  data.map(function (row) {
    keys.map(function (col, i) {
      var field = col.field,
          format = col.format,
          extraData = col.extraData;

      var value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
      var cell = typeof value !== 'undefined' ? '"' + value + '"' : '';
      dataString += cell;
      if (i + 1 < keys.length) dataString += separator;
    });

    dataString += '\n';
  });

  return dataString;
}

var exportCSV = function exportCSV(data, keys, filename, separator, noAutoBOM, excludeCSVHeader) {
  var dataString = toString(data, keys, separator, excludeCSVHeader);
  if (typeof window !== 'undefined') {
    noAutoBOM = noAutoBOM === undefined ? true : noAutoBOM;
    saveAs(new Blob([dataString], { type: 'text/plain;charset=utf-8' }), filename, noAutoBOM);
  }
};

var _default = exportCSV;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saveAs, 'saveAs', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(toString, 'toString', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(exportCSV, 'exportCSV', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/csv_export_util.js');
}();

;

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || function (view) {
	"use strict";
	// IE <10 is explicitly unsupported

	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var doc = view.document
	// only get URL when necessary in case Blob.js hasn't overridden it yet
	,
	    get_URL = function get_URL() {
		return view.URL || view.webkitURL || view;
	},
	    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
	    can_use_save_link = "download" in save_link,
	    click = function click(node) {
		var event = new MouseEvent("click");
		node.dispatchEvent(event);
	},
	    is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
	    is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
	    throw_outside = function throw_outside(ex) {
		(view.setImmediate || view.setTimeout)(function () {
			throw ex;
		}, 0);
	},
	    force_saveable_type = "application/octet-stream"
	// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
	,
	    arbitrary_revoke_timeout = 1000 * 40 // in ms
	,
	    revoke = function revoke(file) {
		var revoker = function revoker() {
			if (typeof file === "string") {
				// file is an object URL
				get_URL().revokeObjectURL(file);
			} else {
				// file is a File
				file.remove();
			}
		};
		setTimeout(revoker, arbitrary_revoke_timeout);
	},
	    dispatch = function dispatch(filesaver, event_types, event) {
		event_types = [].concat(event_types);
		var i = event_types.length;
		while (i--) {
			var listener = filesaver["on" + event_types[i]];
			if (typeof listener === "function") {
				try {
					listener.call(filesaver, event || filesaver);
				} catch (ex) {
					throw_outside(ex);
				}
			}
		}
	},
	    auto_bom = function auto_bom(blob) {
		// prepend BOM for UTF-8 XML and text/* types (including HTML)
		// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
		if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
			return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type });
		}
		return blob;
	},
	    FileSaver = function FileSaver(blob, name, no_auto_bom) {
		if (!no_auto_bom) {
			blob = auto_bom(blob);
		}
		// First try a.download, then web filesystem, then object URLs
		var filesaver = this,
		    type = blob.type,
		    force = type === force_saveable_type,
		    object_url,
		    dispatch_all = function dispatch_all() {
			dispatch(filesaver, "writestart progress write writeend".split(" "));
		}
		// on any filesys errors revert to saving with object URLs
		,
		    fs_error = function fs_error() {
			if ((is_chrome_ios || force && is_safari) && view.FileReader) {
				// Safari doesn't allow downloading of blob urls
				var reader = new FileReader();
				reader.onloadend = function () {
					var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
					var popup = view.open(url, '_blank');
					if (!popup) view.location.href = url;
					url = undefined; // release reference before dispatching
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				};
				reader.readAsDataURL(blob);
				filesaver.readyState = filesaver.INIT;
				return;
			}
			// don't create more object URLs than needed
			if (!object_url) {
				object_url = get_URL().createObjectURL(blob);
			}
			if (force) {
				view.location.href = object_url;
			} else {
				var opened = view.open(object_url, "_blank");
				if (!opened) {
					// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
					view.location.href = object_url;
				}
			}
			filesaver.readyState = filesaver.DONE;
			dispatch_all();
			revoke(object_url);
		};
		filesaver.readyState = filesaver.INIT;

		if (can_use_save_link) {
			object_url = get_URL().createObjectURL(blob);
			setTimeout(function () {
				save_link.href = object_url;
				save_link.download = name;
				click(save_link);
				dispatch_all();
				revoke(object_url);
				filesaver.readyState = filesaver.DONE;
			});
			return;
		}

		fs_error();
	},
	    FS_proto = FileSaver.prototype,
	    saveAs = function saveAs(blob, name, no_auto_bom) {
		return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
	};
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function (blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function () {};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

	return saveAs;
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content);
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
	module.exports.saveAs = saveAs;
} else if ("function" !== "undefined" && __webpack_require__(1057) !== null && __webpack_require__(1094) !== null) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
		return saveAs;
	}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(saveAs, "saveAs", "/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filesaver.js");
}();

;

/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint quotes: 0 */
/* eslint max-len: 0 */


var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

function dateParser(d) {
  return d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
}

var DateFilter = function (_Component) {
  _inherits(DateFilter, _Component);

  function DateFilter(props) {
    _classCallCheck(this, DateFilter);

    var _this = _possibleConstructorReturn(this, (DateFilter.__proto__ || Object.getPrototypeOf(DateFilter)).call(this, props));

    _this.dateComparators = _this.props.dateComparators || legalComparators;
    _this.filter = _this.filter.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(DateFilter, [{
    key: 'setDefaultDate',
    value: function setDefaultDate() {
      var defaultDate = '';
      var defaultValue = this.props.defaultValue;

      if (defaultValue && defaultValue.date) {
        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
        defaultDate = dateParser(new Date(defaultValue.date));
      }
      return defaultDate;
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var date = this.refs.inputDate.value;
      var comparator = event.target.value;
      if (date === '') {
        return;
      }
      date = new Date(date);
      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      for (var i = 0; i < this.dateComparators.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.dateComparators[i] },
          this.dateComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'filter',
    value: function filter(event) {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = event.target.value;
      if (dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
      } else {
        this.props.filterHandler(null, _Const2.default.FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.setDefaultDate();
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.dateFilterComparator.value = comparator;
      this.refs.inputDate.value = value;
      this.props.filterHandler({ date: new Date(value), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterDateObj) {
      var date = filterDateObj.date,
          comparator = filterDateObj.comparator;

      this.setState(function () {
        return { isPlaceholderSelected: date === '' };
      });
      this.refs.dateFilterComparator.value = comparator;
      this.refs.inputDate.value = dateParser(date);
      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.refs.dateFilterComparator.value;
      var dateValue = this.refs.inputDate.value;
      if (comparator && dateValue) {
        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          _props$style = _props.style,
          date = _props$style.date,
          comparator = _props$style.comparator;

      return _react2.default.createElement(
        'div',
        { className: 'filter date-filter' },
        _react2.default.createElement(
          'select',
          { ref: 'dateFilterComparator',
            style: comparator,
            className: 'date-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: defaultValue ? defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        _react2.default.createElement('input', { ref: 'inputDate',
          className: 'filter date-filter-input form-control',
          style: date,
          type: 'date',
          onChange: this.filter,
          defaultValue: this.setDefaultDate() })
      );
    }
  }]);

  return DateFilter;
}(_react.Component);

DateFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.shape({
    date: _react.PropTypes.object,
    comparator: _react.PropTypes.oneOf(legalComparators)
  }),
  style: _react.PropTypes.shape({
    date: _react.PropTypes.oneOfType([_react.PropTypes.object]),
    comparator: _react.PropTypes.oneOfType([_react.PropTypes.object])
  }),
  /* eslint consistent-return: 0 */
  dateComparators: function dateComparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i++) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  columnName: _react.PropTypes.string
};

DateFilter.defaultProps = {
  style: {
    date: null,
    comparator: null
  }
};

var _default = DateFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(dateParser, 'dateParser', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(DateFilter, 'DateFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Date.js');
}();

;

/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

var NumberFilter = function (_Component) {
  _inherits(NumberFilter, _Component);

  function NumberFilter(props) {
    _classCallCheck(this, NumberFilter);

    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

    _this.numberComparators = _this.props.numberComparators || legalComparators;
    _this.timeout = null;
    _this.state = {
      isPlaceholderSelected: _this.props.defaultValue === undefined || _this.props.defaultValue.number === undefined || _this.props.options && _this.props.options.indexOf(_this.props.defaultValue.number) === -1
    };
    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
    return _this;
  }

  _createClass(NumberFilter, [{
    key: 'onChangeNumber',
    value: function onChangeNumber(event) {
      var _this2 = this;

      var comparator = this.refs.numberFilterComparator.value;
      if (comparator === '') {
        return;
      }
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler({ number: filterValue, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
      }, this.props.delay);
    }
  }, {
    key: 'onChangeNumberSet',
    value: function onChangeNumberSet(event) {
      var comparator = this.refs.numberFilterComparator.value;
      var value = event.target.value;

      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      if (comparator === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'onChangeComparator',
    value: function onChangeComparator(event) {
      var value = this.refs.numberFilter.value;
      var comparator = event.target.value;
      if (value === '') {
        return;
      }
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue.number : '';
      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.numberFilterComparator.value = comparator;
      this.refs.numberFilter.value = value;
      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterObj) {
      var number = filterObj.number,
          comparator = filterObj.comparator;

      this.setState(function () {
        return { isPlaceholderSelected: number === '' };
      });
      this.refs.numberFilterComparator.value = comparator;
      this.refs.numberFilter.value = number;
      this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
    }
  }, {
    key: 'getComparatorOptions',
    value: function getComparatorOptions() {
      var optionTags = [];
      var withoutEmptyComparatorOption = this.props.withoutEmptyComparatorOption;

      if (!withoutEmptyComparatorOption) {
        optionTags.push(_react2.default.createElement('option', { key: '-1' }));
      }
      for (var i = 0; i < this.numberComparators.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: this.numberComparators[i] },
          this.numberComparators[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'getNumberOptions',
    value: function getNumberOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          withoutEmptyNumberOption = _props.withoutEmptyNumberOption;

      if (!withoutEmptyNumberOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          this.props.placeholder || 'Select ' + this.props.columnName + '...'
        ));
      }
      for (var i = 0; i < options.length; i++) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: i, value: options[i] },
          options[i]
        ));
      }
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var comparator = this.refs.numberFilterComparator.value;
      var number = this.refs.numberFilter.value;
      if (comparator && number) {
        this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var selectClass = (0, _classnames2.default)('select-filter', 'number-filter-input', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2.default.createElement(
        'div',
        { className: 'filter number-filter' },
        _react2.default.createElement(
          'select',
          { ref: 'numberFilterComparator',
            style: this.props.style.comparator,
            className: 'number-filter-comparator form-control',
            onChange: this.onChangeComparator,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : '' },
          this.getComparatorOptions()
        ),
        this.props.options ? _react2.default.createElement(
          'select',
          { ref: 'numberFilter',
            className: selectClass,
            onChange: this.onChangeNumberSet,
            defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' },
          this.getNumberOptions()
        ) : _react2.default.createElement('input', { ref: 'numberFilter',
          type: 'number',
          style: this.props.style.number,
          className: 'number-filter-input form-control',
          placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
          onChange: this.onChangeNumber,
          defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' })
      );
    }
  }]);

  return NumberFilter;
}(_react.Component);

NumberFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.arrayOf(_react.PropTypes.number),
  defaultValue: _react.PropTypes.shape({
    number: _react.PropTypes.number,
    comparator: _react.PropTypes.oneOf(legalComparators)
  }),
  style: _react.PropTypes.shape({
    number: _react.PropTypes.oneOfType([_react.PropTypes.object]),
    comparator: _react.PropTypes.oneOfType([_react.PropTypes.object])
  }),
  delay: _react.PropTypes.number,
  /* eslint consistent-return: 0 */
  numberComparators: function numberComparators(props, propName) {
    if (!props[propName]) {
      return;
    }
    for (var i = 0; i < props[propName].length; i++) {
      var comparatorIsValid = false;
      for (var j = 0; j < legalComparators.length; j++) {
        if (legalComparators[j] === props[propName][i]) {
          comparatorIsValid = true;
          break;
        }
      }
      if (!comparatorIsValid) {
        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
      }
    }
  },
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  withoutEmptyComparatorOption: _react.PropTypes.bool,
  withoutEmptyNumberOption: _react.PropTypes.bool
};

NumberFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY,
  withoutEmptyComparatorOption: false,
  withoutEmptyNumberOption: false,
  style: {
    number: null,
    comparator: null
  }
};

var _default = NumberFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(NumberFilter, 'NumberFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Number.js');
}();

;

/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegexFilter = function (_Component) {
  _inherits(RegexFilter, _Component);

  function RegexFilter(props) {
    _classCallCheck(this, RegexFilter);

    var _this = _possibleConstructorReturn(this, (RegexFilter.__proto__ || Object.getPrototypeOf(RegexFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.timeout = null;
    return _this;
  }

  _createClass(RegexFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.REGEX);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.refs.inputText.value = value;
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterRegx) {
      this.refs.inputText.value = filterRegx;
      this.props.filterHandler(filterRegx, _Const2.default.FILTER_TYPE.REGEX);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.refs.inputText.value;
      if (value) {
        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.REGEX);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          style = _props.style;

      return _react2.default.createElement('input', { ref: 'inputText',
        className: 'filter text-filter form-control',
        type: 'text',
        style: style,
        onChange: this.filter,
        placeholder: placeholder || 'Enter Regex for ' + columnName + '...',
        defaultValue: defaultValue ? defaultValue : '' });
    }
  }]);

  return RegexFilter;
}(_react.Component);

RegexFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  delay: _react.PropTypes.number,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

RegexFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY
};

var _default = RegexFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RegexFilter, 'RegexFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Regex.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Regex.js');
}();

;

/***/ }),

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function optionsEquals(options1, options2) {
  var keys = Object.keys(options1);
  for (var k in keys) {
    if (options1[k] !== options2[k]) {
      return false;
    }
  }
  return Object.keys(options1).length === Object.keys(options2).length;
}

var SelectFilter = function (_Component) {
  _inherits(SelectFilter, _Component);

  function SelectFilter(props) {
    _classCallCheck(this, SelectFilter);

    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.state = {
      isPlaceholderSelected: _this.props.defaultValue === undefined || !_this.props.options.hasOwnProperty(_this.props.defaultValue)
    };
    return _this;
  }

  _createClass(SelectFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isPlaceholderSelected = nextProps.defaultValue === undefined || !nextProps.options.hasOwnProperty(nextProps.defaultValue);
      this.setState(function () {
        return {
          isPlaceholderSelected: isPlaceholderSelected
        };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var needFilter = false;
      if (this.props.defaultValue !== prevProps.defaultValue) {
        needFilter = true;
      } else if (!optionsEquals(this.props.options, prevProps.options)) {
        needFilter = true;
      }
      if (needFilter) {
        var value = this.refs.selectInput.value;
        if (value) {
          this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
        }
      }
    }
  }, {
    key: 'filter',
    value: function filter(event) {
      var value = event.target.value;

      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
      this.setState(function () {
        return { isPlaceholderSelected: value === '' };
      });
      this.refs.selectInput.value = value;
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterOption) {
      filterOption = filterOption + '';
      this.setState(function () {
        return { isPlaceholderSelected: filterOption === '' };
      });
      this.refs.selectInput.value = filterOption;
      this.props.filterHandler(filterOption, _Const2.default.FILTER_TYPE.SELECT);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var optionTags = [];
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          selectText = _props.selectText,
          withoutEmptyOption = _props.withoutEmptyOption;

      var selectTextValue = selectText !== undefined ? selectText : 'Select';
      if (!withoutEmptyOption) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: '-1', value: '' },
          placeholder || selectTextValue + ' ' + columnName + '...'
        ));
      }
      Object.keys(options).map(function (key) {
        optionTags.push(_react2.default.createElement(
          'option',
          { key: key, value: key },
          options[key] + ''
        ));
      });
      return optionTags;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.refs.selectInput.value;
      if (value) {
        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var selectClass = (0, _classnames2.default)('filter', 'select-filter', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

      return _react2.default.createElement(
        'select',
        { ref: 'selectInput',
          style: this.props.style,
          className: selectClass,
          onChange: this.filter,
          defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '' },
        this.getOptions()
      );
    }
  }]);

  return SelectFilter;
}(_react.Component);

SelectFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  options: _react.PropTypes.object.isRequired,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

var _default = SelectFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(optionsEquals, 'optionsEquals', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');

  __REACT_HOT_LOADER__.register(SelectFilter, 'SelectFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Select.js');
}();

;

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFilter = function (_Component) {
  _inherits(TextFilter, _Component);

  function TextFilter(props) {
    _classCallCheck(this, TextFilter);

    var _this = _possibleConstructorReturn(this, (TextFilter.__proto__ || Object.getPrototypeOf(TextFilter)).call(this, props));

    _this.filter = _this.filter.bind(_this);
    _this.timeout = null;
    _this.state = {
      value: _this.props.defaultValue || ''
    };
    return _this;
  }

  _createClass(TextFilter, [{
    key: 'filter',
    value: function filter(event) {
      var _this2 = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var filterValue = event.target.value;
      this.setState(function () {
        return { value: filterValue };
      });
      this.timeout = setTimeout(function () {
        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.TEXT);
      }, this.props.delay);
    }
  }, {
    key: 'cleanFiltered',
    value: function cleanFiltered() {
      var value = this.props.defaultValue ? this.props.defaultValue : '';
      this.setState(function () {
        return { value: value };
      });
      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(filterText) {
      this.setState(function () {
        return { value: filterText };
      });
      this.props.filterHandler(filterText, _Const2.default.FILTER_TYPE.TEXT);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.refs.inputText.value;
      if (defaultValue) {
        this.props.filterHandler(defaultValue, _Const2.default.FILTER_TYPE.TEXT);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultValue !== this.props.defaultValue) {
        this.applyFilter(nextProps.defaultValue || '');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          columnName = _props.columnName,
          style = _props.style;

      return _react2.default.createElement('input', { ref: 'inputText',
        className: 'filter text-filter form-control',
        type: 'text',
        style: style,
        onChange: this.filter,
        placeholder: placeholder || 'Enter ' + columnName + '...',
        value: this.state.value });
    }
  }]);

  return TextFilter;
}(_react.Component);

TextFilter.propTypes = {
  filterHandler: _react.PropTypes.func.isRequired,
  defaultValue: _react.PropTypes.string,
  delay: _react.PropTypes.number,
  placeholder: _react.PropTypes.string,
  columnName: _react.PropTypes.string,
  style: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

TextFilter.defaultProps = {
  delay: _Const2.default.FILTER_DELAY
};

var _default = TextFilter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TextFilter, 'TextFilter', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Text.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/filters/Text.js');
}();

;

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizePerPageDropDown = exports.ButtonGroup = exports.SearchField = exports.ClearSearchButton = exports.ExportCSVButton = exports.ShowSelectedOnlyButton = exports.DeleteButton = exports.InsertButton = exports.InsertModalFooter = exports.InsertModalBody = exports.InsertModalHeader = exports.TableHeaderColumn = exports.BootstrapTable = undefined;

var _BootstrapTable = __webpack_require__(1447);

var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

var _TableHeaderColumn = __webpack_require__(1292);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

var _InsertModalHeader = __webpack_require__(1300);

var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

var _InsertModalBody = __webpack_require__(1298);

var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

var _InsertModalFooter = __webpack_require__(1299);

var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

var _InsertButton = __webpack_require__(1297);

var _InsertButton2 = _interopRequireDefault(_InsertButton);

var _DeleteButton = __webpack_require__(1295);

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _ExportCSVButton = __webpack_require__(1296);

var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

var _ShowSelectedOnlyButton = __webpack_require__(1302);

var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

var _ClearSearchButton = __webpack_require__(1294);

var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

var _SearchField = __webpack_require__(1301);

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ButtonGroup = __webpack_require__(1469);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _SizePerPageDropDown = __webpack_require__(1293);

var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  window.BootstrapTable = _BootstrapTable2.default;
  window.TableHeaderColumn = _TableHeaderColumn2.default;
  window.InsertModalHeader = _InsertModalHeader2.default;
  window.InsertModalBody = _InsertModalBody2.default;
  window.InsertModalFooter = _InsertModalFooter2.default;
  window.InsertButton = _InsertButton2.default;
  window.DeleteButton = _DeleteButton2.default;
  window.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
  window.ExportCSVButton = _ExportCSVButton2.default;
  window.ClearSearchButton = _ClearSearchButton2.default;
  window.SearchField = _SearchField2.default;
  window.ButtonGroup = _ButtonGroup2.default;
  window.SizePerPageDropDown = _SizePerPageDropDown2.default;
}
exports.BootstrapTable = _BootstrapTable2.default;
exports.TableHeaderColumn = _TableHeaderColumn2.default;
exports.InsertModalHeader = _InsertModalHeader2.default;
exports.InsertModalBody = _InsertModalBody2.default;
exports.InsertModalFooter = _InsertModalFooter2.default;
exports.InsertButton = _InsertButton2.default;
exports.DeleteButton = _DeleteButton2.default;
exports.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
exports.ExportCSVButton = _ExportCSVButton2.default;
exports.ClearSearchButton = _ClearSearchButton2.default;
exports.SearchField = _SearchField2.default;
exports.ButtonGroup = _ButtonGroup2.default;
exports.SizePerPageDropDown = _SizePerPageDropDown2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.pageBtnClick = function () {
      return _this.__pageBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    return _this;
  }

  _createClass(PageButton, [{
    key: '__pageBtnClick__REACT_HOT_LOADER__',
    value: function __pageBtnClick__REACT_HOT_LOADER__(e) {
      e.preventDefault();
      this.props.changePage(e.currentTarget.textContent);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)({
        'active': this.props.active,
        'disabled': this.props.disable,
        'hidden': this.props.hidden,
        'page-item': true
      });
      return _react2.default.createElement(
        'li',
        { className: classes, title: this.props.title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.pageBtnClick, className: 'page-link' },
          this.props.children
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  title: _react.PropTypes.string,
  changePage: _react.PropTypes.func,
  active: _react.PropTypes.bool,
  disable: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

var _default = PageButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageButton, 'PageButton', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PageButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PageButton.js');
}();

;

/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _PageButton = __webpack_require__(1466);

var _PageButton2 = _interopRequireDefault(_PageButton);

var _SizePerPageDropDown = __webpack_require__(1293);

var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _util = __webpack_require__(1066);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationList = function (_Component) {
  _inherits(PaginationList, _Component);

  function PaginationList(props) {
    _classCallCheck(this, PaginationList);

    var _this = _possibleConstructorReturn(this, (PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call(this, props));

    _this.changePage = function () {
      return _this.__changePage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.changeSizePerPage = function () {
      return _this.__changeSizePerPage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.toggleDropDown = function () {
      return _this.__toggleDropDown__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      open: _this.props.open
    };
    return _this;
  }

  _createClass(PaginationList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var keepSizePerPageState = this.props.keepSizePerPageState;

      if (!keepSizePerPageState) {
        this.setState(function () {
          return { open: false };
        });
      }
    }
  }, {
    key: '__changePage__REACT_HOT_LOADER__',
    value: function __changePage__REACT_HOT_LOADER__(page) {
      var _props = this.props,
          pageStartIndex = _props.pageStartIndex,
          prePage = _props.prePage,
          currPage = _props.currPage,
          nextPage = _props.nextPage,
          lastPage = _props.lastPage,
          firstPage = _props.firstPage,
          sizePerPage = _props.sizePerPage,
          keepSizePerPageState = _props.keepSizePerPageState;


      if (page === prePage) {
        page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      } else if (page === nextPage) {
        page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
      } else if (page === lastPage) {
        page = this.lastPage;
      } else if (page === firstPage) {
        page = pageStartIndex;
      } else {
        page = parseInt(page, 10);
      }

      if (keepSizePerPageState) {
        this.setState(function () {
          return { open: false };
        });
      }

      if (page !== currPage) {
        this.props.changePage(page, sizePerPage);
      }
    }
  }, {
    key: '__changeSizePerPage__REACT_HOT_LOADER__',
    value: function __changeSizePerPage__REACT_HOT_LOADER__(pageNum) {
      var selectSize = typeof pageNum === 'string' ? parseInt(pageNum, 10) : pageNum;
      var currPage = this.props.currPage;

      if (selectSize !== this.props.sizePerPage) {
        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
        this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
        if (currPage > this.lastPage) currPage = this.lastPage;
        this.props.changePage(currPage, selectSize);
        if (this.props.onSizePerPageList) {
          this.props.onSizePerPageList(selectSize);
        }
      }
      this.setState(function () {
        return { open: false };
      });
    }
  }, {
    key: '__toggleDropDown__REACT_HOT_LOADER__',
    value: function __toggleDropDown__REACT_HOT_LOADER__() {
      var _this2 = this;

      this.setState(function () {
        return {
          open: !_this2.state.open
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          currPage = _props2.currPage,
          dataSize = _props2.dataSize,
          sizePerPage = _props2.sizePerPage,
          sizePerPageList = _props2.sizePerPageList,
          paginationShowsTotal = _props2.paginationShowsTotal,
          pageStartIndex = _props2.pageStartIndex,
          paginationPanel = _props2.paginationPanel,
          hidePageListOnlyOnePage = _props2.hidePageListOnlyOnePage;

      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      var pageBtns = this.makePage(_util2.default.isFunction(paginationPanel));
      var dropdown = this.makeDropDown();

      var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
      var start = (currPage - pageStartIndex) * sizePerPage;
      start = dataSize === 0 ? 0 : start + 1;
      var to = Math.min(sizePerPage * (currPage + offset) - 1, dataSize);
      if (to >= dataSize) to--;
      var total = paginationShowsTotal ? _react2.default.createElement(
        'span',
        null,
        'Showing rows ',
        start,
        ' to\xA0',
        to + 1,
        ' of\xA0',
        dataSize
      ) : null;

      if (_util2.default.isFunction(paginationShowsTotal)) {
        total = paginationShowsTotal(start, to + 1, dataSize);
      }

      var content = paginationPanel && paginationPanel({
        currPage: currPage,
        sizePerPage: sizePerPage,
        sizePerPageList: sizePerPageList,
        pageStartIndex: pageStartIndex,
        changePage: this.changePage,
        toggleDropDown: this.toggleDropDown,
        changeSizePerPage: this.changeSizePerPage,
        components: {
          totalText: total,
          sizePerPageDropdown: dropdown,
          pageList: pageBtns
        }
      });

      var hidePageList = hidePageListOnlyOnePage && this.totalPages === 1 ? 'none' : 'block';
      return _react2.default.createElement(
        'div',
        { className: 'row', style: { marginTop: 15 } },
        content || [_react2.default.createElement(
          'div',
          { key: 'paging-left', className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          total,
          sizePerPageList.length > 1 ? dropdown : null
        ), _react2.default.createElement(
          'div',
          { key: 'paging-right', style: { display: hidePageList },
            className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          pageBtns
        )]
      );
    }
  }, {
    key: 'makeDropDown',
    value: function makeDropDown() {
      var _this3 = this;

      var dropdown = void 0;
      var dropdownProps = void 0;
      var sizePerPageText = '';
      var _props3 = this.props,
          sizePerPageDropDown = _props3.sizePerPageDropDown,
          hideSizePerPage = _props3.hideSizePerPage,
          sizePerPage = _props3.sizePerPage,
          sizePerPageList = _props3.sizePerPageList;

      if (sizePerPageDropDown) {
        dropdown = sizePerPageDropDown({
          open: this.state.open,
          hideSizePerPage: hideSizePerPage,
          currSizePerPage: String(sizePerPage),
          sizePerPageList: sizePerPageList,
          toggleDropDown: this.toggleDropDown,
          changeSizePerPage: this.changeSizePerPage
        });
        if (dropdown.type.name === _SizePerPageDropDown2.default.name) {
          dropdownProps = dropdown.props;
        } else {
          return dropdown;
        }
      }

      if (dropdownProps || !dropdown) {
        var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNum = _sizePerPage.value || _sizePerPage;
          if (sizePerPage === pageNum) sizePerPageText = pageText;
          return _react2.default.createElement(
            'li',
            { key: pageText, role: 'presentation' },
            _react2.default.createElement(
              'a',
              { role: 'menuitem',
                tabIndex: '-1', href: '#',
                'data-page': pageNum,
                onClick: function onClick(e) {
                  e.preventDefault();
                  _this3.changeSizePerPage(pageNum);
                } },
              pageText
            )
          );
        });
        dropdown = _react2.default.createElement(_SizePerPageDropDown2.default, _extends({
          open: this.state.open,
          hidden: hideSizePerPage,
          currSizePerPage: String(sizePerPageText),
          options: sizePerPageOptions,
          onClick: this.toggleDropDown
        }, dropdownProps));
      }
      return dropdown;
    }
  }, {
    key: 'makePage',
    value: function makePage() {
      var _this4 = this;

      var isCustomPagingPanel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var pages = this.getPages();
      var isStart = function isStart(page, _ref) {
        var currPage = _ref.currPage,
            pageStartIndex = _ref.pageStartIndex,
            firstPage = _ref.firstPage,
            prePage = _ref.prePage;
        return currPage === pageStartIndex && (page === firstPage || page === prePage);
      };
      var isEnd = function isEnd(page, _ref2) {
        var currPage = _ref2.currPage,
            nextPage = _ref2.nextPage,
            lastPage = _ref2.lastPage;
        return currPage === _this4.lastPage && (page === nextPage || page === lastPage);
      };
      var pageBtns = pages.filter(function (page) {
        if (this.props.alwaysShowAllBtns) {
          return true;
        }
        return isStart(page, this.props) || isEnd(page, this.props) ? false : true;
      }, this).map(function (page) {
        var isActive = page === this.props.currPage;
        var isDisabled = isStart(page, this.props) || isEnd(page, this.props) ? true : false;
        var title = page + '';

        if (page === this.props.nextPage) {
          title = this.props.nextPageTitle;
        } else if (page === this.props.prePage) {
          title = this.props.prePageTitle;
        } else if (page === this.props.firstPage) {
          title = this.props.firstPageTitle;
        } else if (page === this.props.lastPage) {
          title = this.props.lastPageTitle;
        }

        return _react2.default.createElement(
          _PageButton2.default,
          { key: page,
            title: title,
            changePage: this.changePage,
            active: isActive,
            disable: isDisabled },
          page
        );
      }, this);
      var classname = (0, _classnames2.default)(isCustomPagingPanel ? null : 'react-bootstrap-table-page-btns-ul', 'pagination');
      return _react2.default.createElement(
        'ul',
        { className: classname },
        pageBtns
      );
    }
  }, {
    key: 'getLastPage',
    value: function getLastPage() {
      return this.lastPage;
    }
  }, {
    key: 'getPages',
    value: function getPages() {
      var pages = void 0;
      var endPage = this.totalPages;
      if (endPage <= 0) return [];
      var startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), this.props.pageStartIndex);
      endPage = startPage + this.props.paginationSize - 1;

      if (endPage > this.lastPage) {
        endPage = this.lastPage;
        startPage = endPage - this.props.paginationSize + 1;
      }

      if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize && this.props.withFirstAndLast) {
        pages = [this.props.firstPage, this.props.prePage];
      } else if (this.totalPages > 1 || this.props.alwaysShowAllBtns) {
        pages = [this.props.prePage];
      } else {
        pages = [];
      }

      for (var i = startPage; i <= endPage; i++) {
        if (i >= this.props.pageStartIndex) pages.push(i);
      }

      if (endPage <= this.lastPage && pages.length > 1) {
        pages.push(this.props.nextPage);
      }
      if (endPage !== this.lastPage && this.props.withFirstAndLast) {
        pages.push(this.props.lastPage);
      }

      return pages;
    }
  }]);

  return PaginationList;
}(_react.Component);

PaginationList.propTypes = {
  currPage: _react.PropTypes.number,
  sizePerPage: _react.PropTypes.number,
  dataSize: _react.PropTypes.number,
  changePage: _react.PropTypes.func,
  sizePerPageList: _react.PropTypes.array,
  paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
  paginationSize: _react.PropTypes.number,
  onSizePerPageList: _react.PropTypes.func,
  prePage: _react.PropTypes.string,
  pageStartIndex: _react.PropTypes.number,
  hideSizePerPage: _react.PropTypes.bool,
  alwaysShowAllBtns: _react.PropTypes.bool,
  withFirstAndLast: _react.PropTypes.bool,
  sizePerPageDropDown: _react.PropTypes.func,
  paginationPanel: _react.PropTypes.func,
  prePageTitle: _react.PropTypes.string,
  nextPageTitle: _react.PropTypes.string,
  firstPageTitle: _react.PropTypes.string,
  lastPageTitle: _react.PropTypes.string,
  hidePageListOnlyOnePage: _react.PropTypes.bool,
  keepSizePerPageState: _react.PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: _Const2.default.SIZE_PER_PAGE,
  pageStartIndex: _Const2.default.PAGE_START_INDEX
};

var _default = PaginationList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PaginationList, 'PaginationList', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/pagination/PaginationList.js');
}();

;

/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableDataStore = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-nested-ternary: 0 */
/* eslint guard-for-in: 0 */
/* eslint no-console: 0 */
/* eslint eqeqeq: 0 */
/* eslint one-var: 0 */


var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableDataStore = function () {
  function TableDataStore(data) {
    var _this = this;

    _classCallCheck(this, TableDataStore);

    this.isValidKey = function () {
      return _this.__isValidKey__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    this.data = data;
    this.filteredData = null;
    this.isOnFilter = false;
    this.filterObj = null;
    this.searchText = null;
    this.sortList = [];
    this.pageObj = {};
    this.selected = [];
    this.showOnlySelected = false;
  }

  _createClass(TableDataStore, [{
    key: 'setProps',
    value: function setProps(props) {
      this.keyField = props.keyField;
      this.enablePagination = props.isPagination;
      this.colInfos = props.colInfos;
      this.remote = props.remote;
      this.multiColumnSearch = props.multiColumnSearch;
      // default behaviour if strictSearch prop is not provided: !multiColumnSearch
      this.strictSearch = typeof props.strictSearch === 'undefined' ? !props.multiColumnSearch : props.strictSearch;
      this.multiColumnSort = props.multiColumnSort;
    }
  }, {
    key: 'clean',
    value: function clean() {
      this.filteredData = null;
      this.isOnFilter = false;
      this.filterObj = null;
      this.searchText = null;
      this.sortList = [];
      this.pageObj = {};
      this.selected = [];
    }
  }, {
    key: 'isSearching',
    value: function isSearching() {
      return this.searchText !== null;
    }
  }, {
    key: 'isFiltering',
    value: function isFiltering() {
      return this.filterObj !== null;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      this.data = data;
      if (this.remote) {
        return;
      }

      this._refresh(true);
    }
  }, {
    key: 'getColInfos',
    value: function getColInfos() {
      return this.colInfos;
    }
  }, {
    key: 'getSortInfo',
    value: function getSortInfo() {
      return this.sortList;
    }
  }, {
    key: 'setSortInfo',
    value: function setSortInfo(order, sortField) {
      if ((typeof order === 'undefined' ? 'undefined' : _typeof(order)) !== (typeof sortField === 'undefined' ? 'undefined' : _typeof(sortField))) {
        throw new Error('The type of sort field and order should be both with String or Array');
      }
      if (Array.isArray(order) && Array.isArray(sortField)) {
        if (order.length !== sortField.length) {
          throw new Error('The length of sort fields and orders should be equivalent');
        }
        order = order.slice().reverse();
        this.sortList = sortField.slice().reverse().map(function (field, i) {
          return {
            order: order[i],
            sortField: field
          };
        });
        this.sortList = this.sortList.slice(0, this.multiColumnSort);
      } else {
        var sortObj = {
          order: order,
          sortField: sortField
        };

        if (this.multiColumnSort > 1) {
          var i = this.sortList.length - 1;
          var sortFieldInHistory = false;

          for (; i >= 0; i--) {
            if (this.sortList[i].sortField === sortField) {
              sortFieldInHistory = true;
              break;
            }
          }

          if (sortFieldInHistory) {
            if (i > 0) {
              this.sortList = this.sortList.slice(0, i);
            } else {
              this.sortList = this.sortList.slice(1);
            }
          }

          this.sortList.unshift(sortObj);
          this.sortList = this.sortList.slice(0, this.multiColumnSort);
        } else {
          this.sortList = [sortObj];
        }
      }
    }
  }, {
    key: 'cleanSortInfo',
    value: function cleanSortInfo() {
      this.sortList = [];
    }
  }, {
    key: 'setSelectedRowKey',
    value: function setSelectedRowKey(selectedRowKeys) {
      this.selected = selectedRowKeys;
    }
  }, {
    key: 'getRowByKey',
    value: function getRowByKey(keys) {
      var _this2 = this;

      // Bad Performance #1164
      // return keys.map(key => {
      //   const result = this.data.filter(d => d[this.keyField] === key);
      //   if (result.length !== 0) return result[0];
      // });
      var result = [];
      if (!keys || keys.length === 0) {
        return result;
      }

      var _loop = function _loop(i) {
        var d = _this2.data[i];
        if (keys.indexOf(d[_this2.keyField]) > -1) {
          keys = keys.filter(function (k) {
            return k !== d[_this2.keyField];
          });
          result.push(d);
        }
      };

      for (var i = 0; i < this.data.length; i++) {
        _loop(i);
      }
      return result;
    }
  }, {
    key: 'getSelectedRowKeys',
    value: function getSelectedRowKeys() {
      return this.selected;
    }
  }, {
    key: 'getCurrentDisplayData',
    value: function getCurrentDisplayData() {
      if (this.isOnFilter) return this.filteredData;else return this.data;
    }
  }, {
    key: '_refresh',
    value: function _refresh(skipSorting) {
      if (this.isOnFilter) {
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      if (!skipSorting && this.sortList.length > 0) {
        this.sort();
      }
    }
  }, {
    key: 'ignoreNonSelected',
    value: function ignoreNonSelected() {
      var _this3 = this;

      this.showOnlySelected = !this.showOnlySelected;
      if (this.showOnlySelected) {
        this.isOnFilter = true;
        this.filteredData = this.data.filter(function (row) {
          var result = _this3.selected.find(function (x) {
            return row[_this3.keyField] === x;
          });
          return typeof result !== 'undefined' ? true : false;
        });
      } else {
        this.isOnFilter = false;
      }
    }
  }, {
    key: 'sort',
    value: function sort() {
      var currentDisplayData = this.getCurrentDisplayData();

      currentDisplayData = this._sort(currentDisplayData);

      return this;
    }
  }, {
    key: 'page',
    value: function page(_page, sizePerPage) {
      this.pageObj.end = _page * sizePerPage - 1;
      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
      return this;
    }
  }, {
    key: 'edit',
    value: function edit(newVal, rowIndex, fieldName) {
      var currentDisplayData = this.getCurrentDisplayData();
      var rowKeyCache = void 0;
      if (!this.enablePagination) {
        currentDisplayData[rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
      } else {
        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
      }
      if (this.isOnFilter) {
        this.data.forEach(function (row) {
          if (row[this.keyField] === rowKeyCache) {
            row[fieldName] = newVal;
          }
        }, this);
        if (this.filterObj !== null) this.filter(this.filterObj);
        if (this.searchText !== null) this.search(this.searchText);
      }
      return this;
    }
  }, {
    key: 'addAtBegin',
    value: function addAtBegin(newObj) {
      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
        throw new Error(this.keyField + ' can\'t be empty value.');
      }
      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.forEach(function (row) {
        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
          throw new Error(this.keyField + ' ' + newObj[this.keyField] + ' already exists');
        }
      }, this);
      currentDisplayData.unshift(newObj);
      if (this.isOnFilter) {
        this.data.unshift(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: 'add',
    value: function add(newObj) {
      var e = this.isValidKey(newObj[this.keyField]);
      if (e) throw new Error(e);

      var currentDisplayData = this.getCurrentDisplayData();
      currentDisplayData.push(newObj);
      if (this.isOnFilter) {
        this.data.push(newObj);
      }
      this._refresh(false);
    }
  }, {
    key: '__isValidKey__REACT_HOT_LOADER__',
    value: function __isValidKey__REACT_HOT_LOADER__(key) {
      var _this4 = this;

      if (key === null || key === undefined || key.toString() === '') {
        return this.keyField + ' can\'t be empty value.';
      }
      var currentDisplayData = this.getCurrentDisplayData();
      var exist = currentDisplayData.find(function (row) {
        return row[_this4.keyField].toString() === key.toString();
      });
      if (exist) return this.keyField + ' ' + key + ' already exists';
    }
  }, {
    key: 'remove',
    value: function remove(rowKey) {
      var _this5 = this;

      var currentDisplayData = this.getCurrentDisplayData();
      var result = currentDisplayData.filter(function (row) {
        return rowKey.indexOf(row[_this5.keyField]) === -1;
      });

      if (this.isOnFilter) {
        this.data = this.data.filter(function (row) {
          return rowKey.indexOf(row[_this5.keyField]) === -1;
        });
        this.filteredData = result;
      } else {
        this.data = result;
      }
    }
  }, {
    key: 'filter',
    value: function filter(filterObj) {
      if (Object.keys(filterObj).length === 0) {
        this.filteredData = null;
        this.isOnFilter = false;
        this.filterObj = null;
        if (this.searchText) this._search(this.data);
      } else {
        var source = this.data;
        this.filterObj = filterObj;
        if (this.searchText) {
          this._search(source);
          source = this.filteredData;
        }
        this._filter(source);
      }
    }
  }, {
    key: 'filterNumber',
    value: function filterNumber(targetVal, filterVal, comparator) {
      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (targetVal != filterVal) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetVal < filterVal) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetVal > filterVal) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (targetVal == filterVal) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Number comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterDate',
    value: function filterDate(targetVal, filterVal, comparator) {
      if (!targetVal) return false;

      var filterDate = filterVal.getDate();
      var filterMonth = filterVal.getMonth();
      var filterYear = filterVal.getFullYear();

      if ((typeof targetVal === 'undefined' ? 'undefined' : _typeof(targetVal)) !== 'object') {
        targetVal = new Date(targetVal);
      }

      var targetDate = targetVal.getDate();
      var targetMonth = targetVal.getMonth();
      var targetYear = targetVal.getFullYear();

      var valid = true;
      switch (comparator) {
        case '=':
          {
            if (filterDate !== targetDate || filterMonth !== targetMonth || filterYear !== targetYear) {
              valid = false;
            }
            break;
          }
        case '>':
          {
            if (targetVal <= filterVal) {
              valid = false;
            }
            break;
          }
        case '>=':
          {
            if (targetYear < filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth < filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate < filterDate) {
              valid = false;
            }
            break;
          }
        case '<':
          {
            if (targetVal >= filterVal) {
              valid = false;
            }
            break;
          }
        case '<=':
          {
            if (targetYear > filterYear) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth > filterMonth) {
              valid = false;
            } else if (targetYear === filterYear && targetMonth === filterMonth && targetDate > filterDate) {
              valid = false;
            }
            break;
          }
        case '!=':
          {
            if (filterDate === targetDate && filterMonth === targetMonth && filterYear === targetYear) {
              valid = false;
            }
            break;
          }
        default:
          {
            console.error('Date comparator provided is not supported');
            break;
          }
      }
      return valid;
    }
  }, {
    key: 'filterRegex',
    value: function filterRegex(targetVal, filterVal) {
      try {
        return new RegExp(filterVal, 'i').test(targetVal);
      } catch (e) {
        return true;
      }
    }
  }, {
    key: 'filterCustom',
    value: function filterCustom(targetVal, filterVal, callbackInfo, cond) {
      if (callbackInfo !== null && (typeof callbackInfo === 'undefined' ? 'undefined' : _typeof(callbackInfo)) === 'object') {
        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
      }

      return this.filterText(targetVal, filterVal, cond);
    }
  }, {
    key: 'filterText',
    value: function filterText(targetVal, filterVal) {
      var cond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Const2.default.FILTER_COND_LIKE;

      targetVal = targetVal.toString();
      filterVal = filterVal.toString();
      if (cond === _Const2.default.FILTER_COND_EQ) {
        return targetVal === filterVal;
      } else {
        targetVal = targetVal.toLowerCase();
        filterVal = filterVal.toLowerCase();
        return !(targetVal.indexOf(filterVal) === -1);
      }
    }

    /* General search function
     * It will search for the text if the input includes that text;
     */

  }, {
    key: 'search',
    value: function search(searchText) {
      if (searchText.trim() === '') {
        this.filteredData = null;
        this.isOnFilter = false;
        this.searchText = null;
        if (this.filterObj) this._filter(this.data);
      } else {
        var source = this.data;
        this.searchText = searchText;
        if (this.filterObj) {
          this._filter(source);
          source = this.filteredData;
        }
        this._search(source);
      }
    }
  }, {
    key: '_filter',
    value: function _filter(source) {
      var _this6 = this;

      var filterObj = this.filterObj;
      this.filteredData = source.filter(function (row, r) {
        var valid = true;
        var filterVal = void 0;
        for (var key in filterObj) {
          var targetVal = row[key];
          if (targetVal === null || targetVal === undefined) {
            targetVal = '';
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                filterVal = filterObj[key].value.number;
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                filterVal = _typeof(filterObj[key].value) === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                filterVal = filterObj[key].value.date;
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                filterVal = filterObj[key].value;
                break;
              }
            default:
              {
                filterVal = filterObj[key].value;
                if (filterVal === undefined) {
                  // Support old filter
                  filterVal = filterObj[key];
                }
                break;
              }
          }
          var format = void 0,
              filterFormatted = void 0,
              formatExtraData = void 0,
              filterValue = void 0;
          if (_this6.colInfos[key]) {
            format = _this6.colInfos[key].format;
            filterFormatted = _this6.colInfos[key].filterFormatted;
            formatExtraData = _this6.colInfos[key].formatExtraData;
            filterValue = _this6.colInfos[key].filterValue;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            }
          }

          switch (filterObj[key].type) {
            case _Const2.default.FILTER_TYPE.NUMBER:
              {
                valid = _this6.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.DATE:
              {
                valid = _this6.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
                break;
              }
            case _Const2.default.FILTER_TYPE.REGEX:
              {
                valid = _this6.filterRegex(targetVal, filterVal);
                break;
              }
            case _Const2.default.FILTER_TYPE.CUSTOM:
              {
                var cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterCustom(targetVal, filterVal, filterObj[key].value, cond);
                break;
              }
            default:
              {
                if (filterObj[key].type === _Const2.default.FILTER_TYPE.SELECT && filterFormatted && filterFormatted && format) {
                  filterVal = format(filterVal, row, formatExtraData, r);
                }
                var _cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
                valid = _this6.filterText(targetVal, filterVal, _cond);
                break;
              }
          }
          if (!valid) {
            break;
          }
        }
        return valid;
      });
      this.isOnFilter = true;
    }

    /*
     * Four different sort modes, all case insensitive:
     * (1) strictSearch && !multiColumnSearch
     *     search text must be contained as provided in a single column
     * (2) strictSearch && multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms over multiple columns
     * (3) !strictSearch && !multiColumnSearch
     *     conjunction (AND combination) of whitespace separated terms in a single column
     * (4) !strictSearch && multiColumnSearch
     *     any of the whitespace separated terms must be contained in any column
     */

  }, {
    key: '_search',
    value: function _search(source) {
      var _this7 = this;

      var searchTextArray = void 0;
      if (this.multiColumnSearch || !this.strictSearch) {
        // ignore leading and trailing whitespaces
        searchTextArray = this.searchText.trim().toLowerCase().split(/\s+/);
      } else {
        searchTextArray = [this.searchText.toLowerCase()];
      }
      var searchTermCount = searchTextArray.length;
      var multipleTerms = searchTermCount > 1;
      var nonStrictMultiCol = multipleTerms && !this.strictSearch && this.multiColumnSearch;
      var nonStrictSingleCol = multipleTerms && !this.strictSearch && !this.multiColumnSearch;
      this.filteredData = source.filter(function (row, r) {
        var keys = Object.keys(row);
        // only clone array if necessary
        var searchTerms = multipleTerms ? searchTextArray.slice() : searchTextArray;
        // for loops are ugly, but performance matters here.
        // And you cant break from a forEach.
        // http://jsperf.com/for-vs-foreach/66
        for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
          var key = keys[i];
          var colInfo = _this7.colInfos[key];
          if (colInfo && colInfo.searchable) {
            var format = colInfo.format,
                filterFormatted = colInfo.filterFormatted,
                filterValue = colInfo.filterValue,
                formatExtraData = colInfo.formatExtraData;

            var targetVal = void 0;
            if (filterFormatted && format) {
              targetVal = format(row[key], row, formatExtraData, r);
            } else if (filterValue) {
              targetVal = filterValue(row[key], row);
            } else {
              targetVal = row[key];
            }
            if (targetVal !== null && typeof targetVal !== 'undefined') {
              targetVal = targetVal.toString().toLowerCase();
              if (nonStrictSingleCol && searchTermCount > searchTerms.length) {
                // reset search terms for single column search
                searchTerms = searchTextArray.slice();
              }
              for (var j = searchTerms.length - 1; j > -1; j--) {
                if (targetVal.indexOf(searchTerms[j]) !== -1) {
                  if (nonStrictMultiCol || searchTerms.length === 1) {
                    // match found: the last or only one
                    return true;
                  }
                  // match found: but there are more search terms to check for
                  searchTerms.splice(j, 1);
                } else if (!_this7.multiColumnSearch) {
                  // one of the search terms was not found in this column
                  break;
                }
              }
            }
          }
        }
        return false;
      });
      this.isOnFilter = true;
    }
  }, {
    key: '_sort',
    value: function _sort(arr) {
      var _this8 = this;

      if (this.sortList.length === 0 || typeof this.sortList[0] === 'undefined') {
        return arr;
      }

      arr.sort(function (a, b) {
        var result = 0;

        for (var i = 0; i < _this8.sortList.length; i++) {
          var sortDetails = _this8.sortList[i];
          var isDesc = sortDetails.order.toLowerCase() === _Const2.default.SORT_DESC;

          var _colInfos$sortDetails = _this8.colInfos[sortDetails.sortField],
              sortFunc = _colInfos$sortDetails.sortFunc,
              sortFuncExtraData = _colInfos$sortDetails.sortFuncExtraData;


          if (sortFunc) {
            result = sortFunc(a, b, sortDetails.order, sortDetails.sortField, sortFuncExtraData);
          } else {
            var valueA = a[sortDetails.sortField] === null ? '' : a[sortDetails.sortField];
            var valueB = b[sortDetails.sortField] === null ? '' : b[sortDetails.sortField];
            if (isDesc) {
              if (typeof valueB === 'string') {
                result = valueB.localeCompare(valueA);
              } else {
                result = valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
              }
            } else {
              if (typeof valueA === 'string') {
                result = valueA.localeCompare(valueB);
              } else {
                result = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
              }
            }
          }

          if (result !== 0) {
            return result;
          }
        }

        return result;
      });

      return arr;
    }
  }, {
    key: 'getDataIgnoringPagination',
    value: function getDataIgnoringPagination() {
      return this.getCurrentDisplayData();
    }
  }, {
    key: 'get',
    value: function get() {
      var _data = this.getCurrentDisplayData();

      if (_data.length === 0) return _data;

      var remote = typeof this.remote === 'function' ? this.remote(_Const2.default.REMOTE)[_Const2.default.REMOTE_PAGE] : this.remote;

      if (remote || !this.enablePagination) {
        return _data;
      } else {
        var result = [];
        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
          result.push(_data[i]);
          if (i + 1 === _data.length) break;
        }
        return result;
      }
    }
  }, {
    key: 'getKeyField',
    value: function getKeyField() {
      return this.keyField;
    }
  }, {
    key: 'getDataNum',
    value: function getDataNum() {
      return this.getCurrentDisplayData().length;
    }
  }, {
    key: 'isChangedPage',
    value: function isChangedPage() {
      return this.pageObj.start && this.pageObj.end ? true : false;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.data.length === 0 || this.data === null || this.data === undefined;
    }
  }, {
    key: 'getAllRowkey',
    value: function getAllRowkey() {
      var _this9 = this;

      return this.data.map(function (row) {
        return row[_this9.keyField];
      });
    }
  }]);

  return TableDataStore;
}();

exports.TableDataStore = TableDataStore;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableDataStore, 'TableDataStore', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/store/TableDataStore.js');
}();

;

/***/ }),

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_Component) {
  _inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          sizeClass = _props.sizeClass,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'sizeClass', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({ className: 'btn-group ' + sizeClass + ' ' + className, role: 'group' }, rest),
        children
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = {
  sizeClass: _react.PropTypes.string,
  className: _react.PropTypes.string
};
ButtonGroup.defaultProps = {
  sizeClass: 'btn-group-sm',
  className: ''
};

var _default = ButtonGroup;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ButtonGroup.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ButtonGroup.js');
}();

;

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InsertModalHeader = __webpack_require__(1300);

var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

var _InsertModalFooter = __webpack_require__(1299);

var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

var _InsertModalBody = __webpack_require__(1298);

var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

var defaultModalClassName = 'react-bs-table-insert-modal';

var InsertModal = function (_Component) {
  _inherits(InsertModal, _Component);

  function InsertModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InsertModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModal.__proto__ || Object.getPrototypeOf(InsertModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
      var _this2;

      return (_this2 = _this).__handleSave__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InsertModal, [{
    key: '__handleSave__REACT_HOT_LOADER__',
    value: function __handleSave__REACT_HOT_LOADER__() {
      var bodyRefs = this.refs.body;
      if (bodyRefs.getFieldValue) {
        this.props.onSave(bodyRefs.getFieldValue());
      } else {
        console.error('Custom InsertModalBody should implement getFieldValue function\n        and should return an object presented as the new row that user input.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerComponent = _props.headerComponent,
          footerComponent = _props.footerComponent,
          bodyComponent = _props.bodyComponent;
      var _props2 = this.props,
          columns = _props2.columns,
          validateState = _props2.validateState,
          ignoreEditable = _props2.ignoreEditable,
          onModalClose = _props2.onModalClose;

      var bodyAttr = { columns: columns, validateState: validateState, ignoreEditable: ignoreEditable };

      bodyComponent = bodyComponent && bodyComponent(columns, validateState, ignoreEditable);

      headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

      footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

      if (bodyComponent) {
        bodyComponent = _react2.default.cloneElement(bodyComponent, { ref: 'body' });
      }

      if (headerComponent && headerComponent.type.name === _InsertModalHeader2.default.name) {
        var eventProps = {};
        if (!headerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
        if (!headerComponent.props.onSave) eventProps.onSave = this.handleSave;
        if (Object.keys(eventProps).length > 0) {
          headerComponent = _react2.default.cloneElement(headerComponent, eventProps);
        }
      } else if (headerComponent && headerComponent.type.name !== _InsertModalHeader2.default.name) {
        var className = headerComponent.props.className;

        if (typeof className === 'undefined' || className.indexOf('modal-header') === -1) {
          headerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            headerComponent
          );
        }
      }

      if (footerComponent && footerComponent.type.name === _InsertModalFooter2.default.name) {
        var _eventProps = {};
        if (!footerComponent.props.onModalClose) _eventProps.onModalClose = onModalClose;
        if (!footerComponent.props.onSave) _eventProps.onSave = this.handleSave;
        if (Object.keys(_eventProps).length > 0) {
          footerComponent = _react2.default.cloneElement(footerComponent, _eventProps);
        }
      } else if (footerComponent && footerComponent.type.name !== _InsertModalFooter2.default.name) {
        var _className = footerComponent.props.className;

        if (typeof _className === 'undefined' || _className.indexOf('modal-footer') === -1) {
          footerComponent = _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            footerComponent
          );
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'modal-content ' + defaultModalClassName },
        headerComponent || _react2.default.createElement(_InsertModalHeader2.default, {
          className: 'react-bs-table-inser-modal-header',
          onModalClose: onModalClose }),
        bodyComponent || _react2.default.createElement(_InsertModalBody2.default, _extends({ ref: 'body' }, bodyAttr)),
        footerComponent || _react2.default.createElement(_InsertModalFooter2.default, {
          className: 'react-bs-table-inser-modal-footer',
          onModalClose: onModalClose,
          onSave: this.handleSave })
      );
    }
  }]);

  return InsertModal;
}(_react.Component);

var _default = InsertModal;
exports.default = _default;

InsertModal.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  validateState: _react.PropTypes.object.isRequired,
  ignoreEditable: _react.PropTypes.bool,
  headerComponent: _react.PropTypes.func,
  bodyComponent: _react.PropTypes.func,
  footerComponent: _react.PropTypes.func,
  onModalClose: _react.PropTypes.func,
  onSave: _react.PropTypes.func
};

InsertModal.defaultProps = {};
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultModalClassName, 'defaultModalClassName', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(InsertModal, 'InsertModal', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/InsertModal.js');
}();

;

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(85);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Const = __webpack_require__(1029);

var _Const2 = _interopRequireDefault(_Const);

var _Notification = __webpack_require__(1291);

var _Notification2 = _interopRequireDefault(_Notification);

var _InsertModal = __webpack_require__(1470);

var _InsertModal2 = _interopRequireDefault(_InsertModal);

var _InsertButton = __webpack_require__(1297);

var _InsertButton2 = _interopRequireDefault(_InsertButton);

var _DeleteButton = __webpack_require__(1295);

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _ExportCSVButton = __webpack_require__(1296);

var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

var _ShowSelectedOnlyButton = __webpack_require__(1302);

var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

var _SearchField = __webpack_require__(1301);

var _SearchField2 = _interopRequireDefault(_SearchField);

var _ClearSearchButton = __webpack_require__(1294);

var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

// import classSet from 'classnames';

// import editor from '../Editor';


var ToolBar = function (_Component) {
  _inherits(ToolBar, _Component);

  function ToolBar(props) {
    var _arguments = arguments;

    _classCallCheck(this, ToolBar);

    var _this = _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call(this, props));

    _this.displayCommonMessage = function () {
      return _this.__displayCommonMessage__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleSaveBtnClick = function () {
      return _this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.afterHandleSaveBtnClick = function () {
      return _this.__afterHandleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalClose = function () {
      return _this.__handleModalClose__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleModalOpen = function () {
      return _this.__handleModalOpen__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleShowOnlyToggle = function () {
      return _this.__handleShowOnlyToggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDropRowBtnClick = function () {
      return _this.__handleDropRowBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDebounce = function (func, wait, immediate) {
      var timeout = void 0;

      return function () {
        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(_this, _arguments);
          }
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait || 0);

        if (callNow) {
          func.appy(_this, _arguments);
        }
      };
    };

    _this.handleKeyUp = function () {
      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleExportCSV = function () {
      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleClearBtnClick = function () {
      return _this.__handleClearBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.timeouteClear = 0;
    _this.modalClassName;
    _this.state = {
      isInsertModalOpen: false,
      validateState: null,
      shakeEditor: false,
      showSelected: false
    };
    return _this;
  }

  _createClass(ToolBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var delay = this.props.searchDelayTime ? this.props.searchDelayTime : 0;
      this.debounceCallback = this.handleDebounce(function () {
        var seachInput = _this2.refs.seachInput;

        seachInput && _this2.props.onSearch(seachInput.getValue());
      }, delay);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reset) {
        this.setSearchInput('');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: 'setSearchInput',
    value: function setSearchInput(text) {
      var seachInput = this.refs.seachInput;

      if (seachInput && seachInput.value !== text) {
        seachInput.value = text;
      }
    }
  }, {
    key: 'clearTimeout',
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this.timeouteClear) {
        clearTimeout(this.timeouteClear);
        this.timeouteClear = 0;
      }
    })
  }, {
    key: '__displayCommonMessage__REACT_HOT_LOADER__',
    value: function __displayCommonMessage__REACT_HOT_LOADER__() {
      this.refs.notifier.notice('error', 'Form validate errors, please checking!', 'Pressed ESC can cancel');
    }
  }, {
    key: 'validateNewRow',
    value: function validateNewRow(newRow) {
      var _this3 = this;

      var validateState = {};
      var isValid = true;
      var tempMsg = void 0;
      var responseType = void 0;

      this.props.columns.forEach(function (column) {
        if (column.isKey && column.keyValidator) {
          // key validator for checking exist key
          tempMsg = _this3.props.isValidKey(newRow[column.field]);
          if (tempMsg) {
            _this3.displayCommonMessage();
            isValid = false;
            validateState[column.field] = tempMsg;
          }
        } else if (column.editable && column.editable.validator) {
          // process validate
          tempMsg = column.editable.validator(newRow[column.field], newRow);
          responseType = typeof tempMsg === 'undefined' ? 'undefined' : _typeof(tempMsg);
          if (responseType !== 'object' && tempMsg !== true) {
            _this3.displayCommonMessage();
            isValid = false;
            validateState[column.field] = tempMsg;
          } else if (responseType === 'object' && tempMsg.isValid !== true) {
            _this3.refs.notifier.notice(tempMsg.notification.type, tempMsg.notification.msg, tempMsg.notification.title);
            isValid = false;
            validateState[column.field] = tempMsg.notification.msg;
          }
        }
      });

      if (isValid) {
        return true;
      } else {
        this.clearTimeout();
        // show error in form and shake it
        this.setState(function () {
          return { validateState: validateState, shakeEditor: true };
        });
        this.timeouteClear = setTimeout(function () {
          _this3.setState(function () {
            return { shakeEditor: false };
          });
        }, 300);
        return null;
      }
    }
  }, {
    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(newRow) {
      if (!this.validateNewRow(newRow)) {
        // validation fail
        return;
      }
      var msg = this.props.onAddRow(newRow);
      if (msg !== false) {
        this.afterHandleSaveBtnClick(msg);
      }
    }
  }, {
    key: '__afterHandleSaveBtnClick__REACT_HOT_LOADER__',
    value: function __afterHandleSaveBtnClick__REACT_HOT_LOADER__(msg) {
      var _this4 = this;

      if (msg) {
        this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
        this.clearTimeout();
        // shake form and hack prevent modal hide
        this.setState(function () {
          return {
            shakeEditor: true,
            validateState: 'this is hack for prevent bootstrap modal hide'
          };
        });
        // clear animate class
        this.timeouteClear = setTimeout(function () {
          _this4.setState(function () {
            return { shakeEditor: false };
          });
        }, 300);
      } else {
        // reset state and hide modal hide
        this.setState(function () {
          return {
            validateState: null,
            shakeEditor: false,
            isInsertModalOpen: false
          };
        });
      }
    }
  }, {
    key: '__handleModalClose__REACT_HOT_LOADER__',
    value: function __handleModalClose__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { isInsertModalOpen: false };
      });
    }
  }, {
    key: '__handleModalOpen__REACT_HOT_LOADER__',
    value: function __handleModalOpen__REACT_HOT_LOADER__() {
      this.setState(function () {
        return { isInsertModalOpen: true };
      });
    }
  }, {
    key: '__handleShowOnlyToggle__REACT_HOT_LOADER__',
    value: function __handleShowOnlyToggle__REACT_HOT_LOADER__() {
      var _this5 = this;

      this.setState(function () {
        return {
          showSelected: !_this5.state.showSelected
        };
      });
      this.props.onShowOnlySelected();
    }
  }, {
    key: '__handleDropRowBtnClick__REACT_HOT_LOADER__',
    value: function __handleDropRowBtnClick__REACT_HOT_LOADER__() {
      this.props.onDropRow();
    }
  }, {
    key: 'handleCloseBtn',
    value: function handleCloseBtn() {
      this.refs.warning.style.display = 'none';
    }
  }, {
    key: '__handleKeyUp__REACT_HOT_LOADER__',
    value: function __handleKeyUp__REACT_HOT_LOADER__(event) {
      event.persist();
      this.debounceCallback(event);
    }
  }, {
    key: '__handleExportCSV__REACT_HOT_LOADER__',
    value: function __handleExportCSV__REACT_HOT_LOADER__() {
      this.props.onExportCSV();
    }
  }, {
    key: '__handleClearBtnClick__REACT_HOT_LOADER__',
    value: function __handleClearBtnClick__REACT_HOT_LOADER__() {
      var seachInput = this.refs.seachInput;

      seachInput && seachInput.setValue('');
      this.props.onSearch('');
    }
  }, {
    key: 'render',
    value: function render() {
      this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
      var toolbar = null;
      var btnGroup = null;
      var insertBtn = null;
      var deleteBtn = null;
      var exportCSVBtn = null;
      var showSelectedOnlyBtn = null;

      if (this.props.enableInsert) {
        if (this.props.insertBtn) {
          insertBtn = this.renderCustomBtn(this.props.insertBtn, [this.handleModalOpen], _InsertButton2.default.name, 'onClick', this.handleModalOpen);
        } else {
          insertBtn = _react2.default.createElement(_InsertButton2.default, { btnText: this.props.insertText,
            onClick: this.handleModalOpen });
        }
      }

      if (this.props.enableDelete) {
        if (this.props.deleteBtn) {
          deleteBtn = this.renderCustomBtn(this.props.deleteBtn, [this.handleDropRowBtnClick], _DeleteButton2.default.name, 'onClick', this.handleDropRowBtnClick);
        } else {
          deleteBtn = _react2.default.createElement(_DeleteButton2.default, { btnText: this.props.deleteText,
            onClick: this.handleDropRowBtnClick });
        }
      }

      if (this.props.enableShowOnlySelected) {
        if (this.props.showSelectedOnlyBtn) {
          showSelectedOnlyBtn = this.renderCustomBtn(this.props.showSelectedOnlyBtn, [this.handleShowOnlyToggle, this.state.showSelected], _ShowSelectedOnlyButton2.default.name, 'onClick', this.handleShowOnlyToggle);
        } else {
          showSelectedOnlyBtn = _react2.default.createElement(_ShowSelectedOnlyButton2.default, { toggle: this.state.showSelected,
            onClick: this.handleShowOnlyToggle });
        }
      }

      if (this.props.enableExportCSV) {
        if (this.props.exportCSVBtn) {
          exportCSVBtn = this.renderCustomBtn(this.props.exportCSVBtn, [this.handleExportCSV], _ExportCSVButton2.default.name, 'onClick', this.handleExportCSV);
        } else {
          exportCSVBtn = _react2.default.createElement(_ExportCSVButton2.default, { btnText: this.props.exportCSVText,
            onClick: this.handleExportCSV });
        }
      }

      if (this.props.btnGroup) {
        btnGroup = this.props.btnGroup({
          exportCSVBtn: exportCSVBtn,
          insertBtn: insertBtn,
          deleteBtn: deleteBtn,
          showSelectedOnlyBtn: showSelectedOnlyBtn
        });
      } else {
        btnGroup = _react2.default.createElement(
          'div',
          { className: 'btn-group btn-group-sm', role: 'group' },
          exportCSVBtn,
          insertBtn,
          deleteBtn,
          showSelectedOnlyBtn
        );
      }

      var _renderSearchPanel = this.renderSearchPanel(),
          _renderSearchPanel2 = _slicedToArray(_renderSearchPanel, 3),
          searchPanel = _renderSearchPanel2[0],
          searchField = _renderSearchPanel2[1],
          clearBtn = _renderSearchPanel2[2];

      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

      if (this.props.toolBar) {
        toolbar = this.props.toolBar({
          components: {
            exportCSVBtn: exportCSVBtn,
            insertBtn: insertBtn,
            deleteBtn: deleteBtn,
            showSelectedOnlyBtn: showSelectedOnlyBtn,
            searchPanel: searchPanel,
            btnGroup: btnGroup,
            searchField: searchField,
            clearBtn: clearBtn
          },
          event: {
            openInsertModal: this.handleModalOpen,
            closeInsertModal: this.handleModalClose,
            dropRow: this.handleDropRowBtnClick,
            showOnlyToogle: this.handleShowOnlyToggle,
            exportCSV: this.handleExportCSV,
            search: this.props.onSearch
          }
        });
      } else {
        toolbar = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-8' },
            this.props.searchPosition === 'left' ? searchPanel : btnGroup
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-4' },
            this.props.searchPosition === 'left' ? btnGroup : searchPanel
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        toolbar,
        _react2.default.createElement(_Notification2.default, { ref: 'notifier' }),
        modal
      );
    }
  }, {
    key: 'renderSearchPanel',
    value: function renderSearchPanel() {
      if (this.props.enableSearch) {
        var classNames = 'form-group form-group-sm react-bs-table-search-form';
        var clearBtn = null;
        var searchField = null;
        var searchPanel = null;
        if (this.props.clearSearch) {
          if (this.props.clearSearchBtn) {
            clearBtn = this.renderCustomBtn(this.props.clearSearchBtn, [this.handleClearBtnClick], _ClearSearchButton2.default.name, 'onClick', this.handleClearBtnClick); /* eslint max-len: 0*/
          } else {
            clearBtn = _react2.default.createElement(_ClearSearchButton2.default, { onClick: this.handleClearBtnClick });
          }
          classNames += ' input-group input-group-sm';
        }

        if (this.props.searchField) {
          searchField = this.props.searchField({
            search: this.handleKeyUp,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder
          });
          if (searchField.type.name === _SearchField2.default.name) {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput',
              onKeyUp: this.handleKeyUp
            });
          } else {
            searchField = _react2.default.cloneElement(searchField, {
              ref: 'seachInput'
            });
          }
        } else {
          searchField = _react2.default.createElement(_SearchField2.default, { ref: 'seachInput',
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            onKeyUp: this.handleKeyUp });
        }
        if (this.props.searchPanel) {
          searchPanel = this.props.searchPanel({
            searchField: searchField, clearBtn: clearBtn,
            search: this.props.onSearch,
            defaultValue: this.props.defaultSearch,
            placeholder: this.props.searchPlaceholder,
            clearBtnClick: this.handleClearBtnClick
          });
        } else {
          searchPanel = _react2.default.createElement(
            'div',
            { className: classNames },
            searchField,
            _react2.default.createElement(
              'span',
              { className: 'input-group-btn' },
              clearBtn
            )
          );
        }
        return [searchPanel, searchField, clearBtn];
      } else {
        return [];
      }
    }
  }, {
    key: 'renderInsertRowModal',
    value: function renderInsertRowModal() {
      var validateState = this.state.validateState || {};
      var _props = this.props,
          columns = _props.columns,
          ignoreEditable = _props.ignoreEditable,
          insertModalHeader = _props.insertModalHeader,
          insertModalBody = _props.insertModalBody,
          insertModalFooter = _props.insertModalFooter,
          insertModal = _props.insertModal;


      var modal = void 0;
      modal = insertModal && insertModal(this.handleModalClose, this.handleSaveBtnClick, columns, validateState, ignoreEditable);

      if (!modal) {
        modal = _react2.default.createElement(_InsertModal2.default, {
          columns: columns,
          validateState: validateState,
          ignoreEditable: ignoreEditable,
          onModalClose: this.handleModalClose,
          onSave: this.handleSaveBtnClick,
          headerComponent: insertModalHeader,
          bodyComponent: insertModalBody,
          footerComponent: insertModalFooter });
      }

      return _react2.default.createElement(
        _reactModal2.default,
        { className: 'react-bs-insert-modal modal-dialog',
          isOpen: this.state.isInsertModalOpen,
          onRequestClose: this.handleModalClose,
          contentLabel: 'Modal' },
        modal
      );
    }
  }, {
    key: 'renderCustomBtn',
    value: function renderCustomBtn(cb, params, componentName, eventName, event) {
      var element = cb.apply(null, params);
      if (element.type.name === componentName && !element.props[eventName]) {
        var props = {};
        props[eventName] = event;
        element = _react2.default.cloneElement(element, props);
      }
      return element;
    }
  }]);

  return ToolBar;
}(_react.Component);

ToolBar.modalSeq = 0;


ToolBar.propTypes = {
  onAddRow: _react.PropTypes.func,
  onDropRow: _react.PropTypes.func,
  onShowOnlySelected: _react.PropTypes.func,
  enableInsert: _react.PropTypes.bool,
  enableDelete: _react.PropTypes.bool,
  enableSearch: _react.PropTypes.bool,
  enableShowOnlySelected: _react.PropTypes.bool,
  columns: _react.PropTypes.array,
  searchPlaceholder: _react.PropTypes.string,
  exportCSVText: _react.PropTypes.string,
  insertText: _react.PropTypes.string,
  deleteText: _react.PropTypes.string,
  saveText: _react.PropTypes.string,
  closeText: _react.PropTypes.string,
  clearSearch: _react.PropTypes.bool,
  ignoreEditable: _react.PropTypes.bool,
  defaultSearch: _react.PropTypes.string,
  insertModalHeader: _react.PropTypes.func,
  insertModalBody: _react.PropTypes.func,
  insertModalFooter: _react.PropTypes.func,
  insertModal: _react.PropTypes.func,
  insertBtn: _react.PropTypes.func,
  deleteBtn: _react.PropTypes.func,
  showSelectedOnlyBtn: _react.PropTypes.func,
  exportCSVBtn: _react.PropTypes.func,
  clearSearchBtn: _react.PropTypes.func,
  searchField: _react.PropTypes.func,
  searchPanel: _react.PropTypes.func,
  btnGroup: _react.PropTypes.func,
  toolBar: _react.PropTypes.func,
  searchPosition: _react.PropTypes.string,
  reset: _react.PropTypes.bool,
  isValidKey: _react.PropTypes.func
};

ToolBar.defaultProps = {
  reset: false,
  enableInsert: false,
  enableDelete: false,
  enableSearch: false,
  enableShowOnlySelected: false,
  clearSearch: false,
  ignoreEditable: false,
  exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
  insertText: _Const2.default.INSERT_BTN_TEXT,
  deleteText: _Const2.default.DELETE_BTN_TEXT,
  saveText: _Const2.default.SAVE_BTN_TEXT,
  closeText: _Const2.default.CLOSE_BTN_TEXT
};

var _default = ToolBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ToolBar, 'ToolBar', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ToolBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/allen/Node/react-bootstrap-table-new/react-bootstrap-table/src/toolbar/ToolBar.js');
}();

;

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1546);

var _d = __webpack_require__(1039);

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarChart = function (_React$Component) {
  (0, _inherits3.default)(BarChart, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function BarChart(props) {
    (0, _classCallCheck3.default)(this, BarChart);
    return (0, _possibleConstructorReturn3.default)(this, (BarChart.__proto__ || (0, _getPrototypeOf2.default)(BarChart)).call(this, props));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(BarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.draw(this.props.data);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      if (nextProps.guid !== this.props.guid) {

        return true;
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      $(this.container).empty();

      this.draw(this.props.data);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'draw',
    value: function draw(data) {
      var _this2 = this;

      if (!data || !data.length) {

        return;
      }

      var container = this.container;

      var margin = {
        bottom: 55,
        right: 40,
        left: 50,
        top: 30
      };

      var width = Math.min(Math.max($(container).width() - 40, 30 * data.length), 100 * data.length) - 10;

      var height = $(container).height() - 93;

      var x = _d2.default.scale.ordinal().rangeRoundBands([0, width], .1);

      var y = _d2.default.scale.linear().range([height, 0]);

      var xAxis = _d2.default.svg.axis().scale(x).orient("bottom");

      var yAxis = _d2.default.svg.axis().scale(y).orient("left").ticks(10, "%");

      var d3Container = _d2.default.select(container);

      var svg = d3Container.append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", 'translate(' + margin.left + ', ' + margin.top + ')');

      x.domain(data.map(function (d) {
        return d.shortLabel;
      }));

      y.domain([0, _d2.default.max(data, function (d) {
        return d.value / 1000;
      })]);

      svg.append("g").attr("class", "x axis").attr("transform", 'translate(0, ' + height + ')').call(xAxis).selectAll("text").style("text-anchor", "end").attr("dx", "-.8em").attr("dy", ".15em").attr("transform", function (d) {
        return "rotate(-20)";
      });

      svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "translate(60, -30)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Components (% Total)");

      var tooltip = _d2.default.select(this.container).append('div').style('background', '#bababa').style('position', 'absolute').style('border-radius', '4px').style('padding', '0 10px').style('display', 'none').style('height', 'auto').style('opacity', 0.70);

      var tempcolor = null;

      svg.selectAll(".bar-item").data(data).enter().append("rect").attr("class", "bar-item").attr("x", function (d) {
        return x(d.shortLabel);
      }).attr("width", x.rangeBand()).attr("y", function (d) {
        return y(d.value / 1000);
      }).attr("height", function (d) {
        return height - y(d.value / 1000);
      }).style('fill', function (d, i) {
        return data[i].color;
      }).on('click', function (item) {
        if (_this2.props.onGroupClicked) {
          _this2.props.onGroupClicked(item);
        }
      }).on('mouseover', function (props) {

        tooltip.transition().style('opacity', .9);

        var offset = $(container).offset();

        var x = _d2.default.event.pageX - offset.left;
        var y = _d2.default.event.pageY - offset.top;

        tooltip.html(props.label).style('left', x + 5 + 'px').style('top', y + 15 + 'px').style('display', 'block');

        tempcolor = this.style.fill;

        _d2.default.select(this).style('fill', '#6AB8E3').style('opacity', .5);
      }).on('mousemove', function (e) {

        var offset = $(container).offset();

        var x = _d2.default.event.pageX - offset.left;
        var y = _d2.default.event.pageY - offset.top;

        tooltip.style('left', x + 5 + 'px').style('top', y + 15 + 'px').style('display', 'block');

        _d2.default.select(this).style('fill', '#6AB8E3').style('opacity', .5);
      }).on('mouseout', function (d) {

        _d2.default.select(this).style('fill', tempcolor).style('opacity', 1);

        tooltip.style('display', 'none');
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { className: 'bar-chart',
        ref: function ref(div) {
          return _this3.container = div;
        } });
    }
  }]);
  return BarChart;
}(_react2.default.Component); /////////////////////////////////////////////////////////
// BarChart
// by Philippe Leefsma, April 2016
//
/////////////////////////////////////////////////////////


exports.default = BarChart;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BarChart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1473:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BarChart = __webpack_require__(1472);

var _BarChart2 = _interopRequireDefault(_BarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BarChart2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3pie = __webpack_require__(1148);

var _d3pie2 = _interopRequireDefault(_d3pie);

__webpack_require__(1548);

var _d = __webpack_require__(1039);

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////
// PieChart
// by Philippe Leefsma, April 2016
//
/////////////////////////////////////////////////////////
var PieChart = function (_React$Component) {
  (0, _inherits3.default)(PieChart, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PieChart(props) {
    (0, _classCallCheck3.default)(this, PieChart);
    return (0, _possibleConstructorReturn3.default)(this, (PieChart.__proto__ || (0, _getPrototypeOf2.default)(PieChart)).call(this, props));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(PieChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.draw(this.props.data);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      if (nextProps.guid !== this.props.guid) {

        return true;
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      $(this.container).empty();

      this.draw(this.props.data, {
        effects: {
          load: {
            effect: 'none'
          }
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'draw',
    value: function draw(data) {
      var _this2 = this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      if (!data || !data.length) {

        return;
      }

      var size = Math.min($(this.container).height(), $(this.container).width());

      var options = (0, _assign2.default)({}, {

        size: {
          canvasHeight: size,
          canvasWidth: size,
          pieInnerRadius: '40%',
          pieOuterRadius: '98%'
        },

        data: {
          content: data
        },

        tooltips: {
          enabled: true,
          type: "placeholder",
          placeholderParser: function placeholderParser(index, replacements) {
            (0, _assign2.default)(replacements, {
              unit: data[index].unit
            });
          },
          string: '{label}',
          styles: {
            fadeInSpeed: 250,
            backgroundColor: "#bababa",
            backgroundOpacity: 0.85,
            color: "#00",
            borderRadius: 2,
            font: "ArtifaktElementRegular",
            fontSize: 10,
            padding: 4,
            zIndex: 1000
          }
        },

        labels: {
          outer: {
            format: 'none',
            hideWhenLessThanPercentage: 5,
            pieDistance: 32
          },
          inner: {
            hideWhenLessThanPercentage: 5
          }
        },

        callbacks: {
          onClickSegment: function onClickSegment(event) {

            if (_this2.props.onGroupClicked) {

              _this2.props.onGroupClicked(event);
            }
          }
        },

        misc: {
          gradient: {
            enabled: false,
            percentage: 100
          }
        }
      }, opts);

      this.pie = new _d3pie2.default(this.container, options);

      this.applyCustomProps();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'applyCustomProps',
    value: function applyCustomProps() {
      var _this3 = this;

      $(this.container).find('svg').css({
        transform: 'translate(0px, -2px)',
        overflow: 'visible'
      });

      setTimeout(function () {

        var $path = $('g[class*="_arc"] > path', $(_this3.container));

        $path.css({
          'stroke-width': '0'
        });
      }, 100);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', { className: 'pie-chart',
        ref: function ref(div) {
          return _this4.container = div;
        } });
    }
  }]);
  return PieChart;
}(_react2.default.Component);

exports.default = PieChart;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PieChart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PieChart = __webpack_require__(1476);

var _PieChart2 = _interopRequireDefault(_PieChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PieChart2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__(27);

var getVendorPrefixedEventName = __webpack_require__(405);

var endEvents = [];

function detectEvents() {
  var animEnd = getVendorPrefixedEventName('animationend');
  var transEnd = getVendorPrefixedEventName('transitionend');

  if (animEnd) {
    endEvents.push(animEnd);
  }

  if (transEnd) {
    endEvents.push(transEnd);
  }
}

if (ExecutionEnvironment.canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/* global hasOwnProperty:true */



var _prodInvariant = __webpack_require__(69),
    _assign = __webpack_require__(19);

var invariant = __webpack_require__(14);
var hasOwnProperty = {}.hasOwnProperty;

function shallowCopy(x) {
  if (Array.isArray(x)) {
    return x.concat();
  } else if (x && typeof x === 'object') {
    return _assign(new x.constructor(), x);
  } else {
    return x;
  }
}

var COMMAND_PUSH = '$push';
var COMMAND_UNSHIFT = '$unshift';
var COMMAND_SPLICE = '$splice';
var COMMAND_SET = '$set';
var COMMAND_MERGE = '$merge';
var COMMAND_APPLY = '$apply';

var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

var ALL_COMMANDS_SET = {};

ALL_COMMANDS_LIST.forEach(function (command) {
  ALL_COMMANDS_SET[command] = true;
});

function invariantArrayCase(value, spec, command) {
  !Array.isArray(value) ?  true ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
  var specValue = spec[command];
  !Array.isArray(specValue) ?  true ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
}

/**
 * Returns a updated shallow copy of an object without mutating the original.
 * See https://facebook.github.io/react/docs/update.html for details.
 */
function update(value, spec) {
  !(typeof spec === 'object') ?  true ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    !(Object.keys(spec).length === 1) ?  true ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    !(mergeObj && typeof mergeObj === 'object') ?  true ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
    !(nextValue && typeof nextValue === 'object') ?  true ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
    _assign(nextValue, spec[COMMAND_MERGE]);
  }

  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
    invariantArrayCase(value, spec, COMMAND_PUSH);
    spec[COMMAND_PUSH].forEach(function (item) {
      nextValue.push(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
    spec[COMMAND_UNSHIFT].forEach(function (item) {
      nextValue.unshift(item);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
    !Array.isArray(value) ?  true ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
    !Array.isArray(spec[COMMAND_SPLICE]) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
    spec[COMMAND_SPLICE].forEach(function (args) {
      !Array.isArray(args) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    !(typeof spec[COMMAND_APPLY] === 'function') ?  true ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
    nextValue = spec[COMMAND_APPLY](nextValue);
  }

  for (var k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(value[k], spec[k]);
    }
  }

  return nextValue;
}

module.exports = update;

/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1168);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1168, function() {
			var newContent = __webpack_require__(1168);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1170);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1170, function() {
			var newContent = __webpack_require__(1170);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(1739);

exports.default = 'Viewing.Extension.PlantFactory';

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _BarChart = __webpack_require__(1473);

var _BarChart2 = _interopRequireDefault(_BarChart);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyBarChart = function (_React$Component) {
  (0, _inherits3.default)(PropertyBarChart, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PropertyBarChart() {
    (0, _classCallCheck3.default)(this, PropertyBarChart);
    return (0, _possibleConstructorReturn3.default)(this, (PropertyBarChart.__proto__ || (0, _getPrototypeOf2.default)(PropertyBarChart)).call(this));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(PropertyBarChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          guid = _props.guid,
          title = _props.title,
          data = _props.data,
          viewer = _props.viewer;


      return _react2.default.createElement(
        'div',
        { className: 'property-bar-chart' },
        _react2.default.createElement(
          'div',
          { className: 'title controls' },
          _react2.default.createElement(
            'label',
            null,
            title
          )
        ),
        _react2.default.createElement(_BarChart2.default, { onGroupClicked: function onGroupClicked(e) {

            var dbIds = e.dbIds;

            _Viewer2.default.isolateFull(viewer, dbIds);

            viewer.fitToView();
          },
          guid: guid,
          data: data
        })
      );
    }
  }]);
  return PropertyBarChart;
}(_react2.default.Component);

exports.default = PropertyBarChart;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PropertyBarChart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1737:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(218);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactBootstrapTable = __webpack_require__(1465);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyList = function (_React$Component) {
  (0, _inherits3.default)(PropertyList, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PropertyList() {
    (0, _classCallCheck3.default)(this, PropertyList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PropertyList.__proto__ || (0, _getPrototypeOf2.default)(PropertyList)).call(this));

    _this.percentFormatter = function (cell, row) {
      return cell.toFixed(2) + ' %      ';
    };

    _this.onRowClick = _this.onRowClick.bind(_this);

    _this.lastClickedIndex = -1;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(PropertyList, [{
    key: 'onRowClick',
    value: function onRowClick(row, viewer) {

      if (this.lastClickedIndex !== row.index) {

        var dbIds = row.dbIds;

        _Viewer2.default.isolateFull(viewer, dbIds);

        viewer.fitToView();
      } else {

        _Viewer2.default.isolateFull(viewer);

        viewer.fitToView();
      }

      this.lastClickedIndex = row.index;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var _props = this.props,
          title = _props.title,
          data = _props.data,
          viewer = _props.viewer,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        { className: 'property-list', style: style },
        _react2.default.createElement(
          'div',
          { className: 'title controls' },
          _react2.default.createElement(
            'label',
            null,
            title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'property-list-table' },
          _react2.default.createElement(
            _reactBootstrapTable.BootstrapTable,
            { data: data, striped: true, hover: true,
              options: {
                onRowClick: function onRowClick(row) {
                  return _this2.onRowClick(row, viewer);
                }
              } },
            _react2.default.createElement(
              _reactBootstrapTable.TableHeaderColumn,
              (_React$createElement = {
                headerAlign: 'left',
                dataAlign: 'left',
                dataField: 'shortLabel',
                isKey: true
              }, (0, _defineProperty3.default)(_React$createElement, 'dataAlign', 'center'), (0, _defineProperty3.default)(_React$createElement, 'dataSort', true), _React$createElement),
              'Value'
            ),
            _react2.default.createElement(
              _reactBootstrapTable.TableHeaderColumn,
              {
                width: '120',
                headerAlign: 'left',
                dataAlign: 'left',
                dataField: 'percent',
                dataFormat: this.percentFormatter },
              '% Components'
            )
          )
        )
      );
    }
  }]);
  return PropertyList;
}(_react2.default.Component);

exports.default = PropertyList;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PropertyList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Viewer = __webpack_require__(1021);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _PieChart = __webpack_require__(1477);

var _PieChart2 = _interopRequireDefault(_PieChart);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropertyPieChart = function (_React$Component) {
  (0, _inherits3.default)(PropertyPieChart, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function PropertyPieChart() {
    (0, _classCallCheck3.default)(this, PropertyPieChart);
    return (0, _possibleConstructorReturn3.default)(this, (PropertyPieChart.__proto__ || (0, _getPrototypeOf2.default)(PropertyPieChart)).call(this));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(PropertyPieChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          guid = _props.guid,
          title = _props.title,
          data = _props.data,
          viewer = _props.viewer,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        { className: 'property-pie-chart', style: style },
        _react2.default.createElement(
          'div',
          { className: 'title controls' },
          _react2.default.createElement(
            'label',
            null,
            title
          )
        ),
        _react2.default.createElement(_PieChart2.default, { onGroupClicked: function onGroupClicked(e) {

            var dbIds = e.expanded ? [] : e.data.dbIds;

            _Viewer2.default.isolateFull(viewer, dbIds);

            viewer.fitToView();
          },
          guid: guid,
          data: data
        })
      );
    }
  }]);
  return PropertyPieChart;
}(_react2.default.Component);

exports.default = PropertyPieChart;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "PropertyPieChart.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1739:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(1022);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Viewer = __webpack_require__(1025);

var _Viewer2 = _interopRequireDefault(_Viewer);

__webpack_require__(1825);

var _WidgetContainer = __webpack_require__(1027);

var _WidgetContainer2 = _interopRequireDefault(_WidgetContainer);

var _Loader = __webpack_require__(1046);

var _transform = __webpack_require__(1140);

var _transform2 = _interopRequireDefault(_transform);

var _Viewer3 = __webpack_require__(1021);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d = __webpack_require__(1039);

var _d2 = _interopRequireDefault(_d);

var _PropertyBarChart = __webpack_require__(1736);

var _PropertyBarChart2 = _interopRequireDefault(_PropertyBarChart);

var _PropertyPieChart = __webpack_require__(1738);

var _PropertyPieChart2 = _interopRequireDefault(_PropertyPieChart);

var _PropertyList = __webpack_require__(1737);

var _PropertyList2 = _interopRequireDefault(_PropertyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateInit = {
  "viewport": {
    "eye": [-1030.0044002713657, 689.6647995313627, 23.252165301460103],
    "target": [-996.3266755707967, 710.4723026870788, -1.3707349423499071],
    "up": [0.4493194129425462, 0.277608276267206, 0.849144104437472],
    "worldUpVector": [0, 0, 1],
    "pivotPoint": [-925.7424926757812, 757.1752319335938, -43.030099868774414],
    "distanceToOrbit": 140.45651469798588,
    "aspectRatio": 1.7655609631147542,
    "projection": "perspective",
    "isOrthographic": false,
    "fieldOfView": 48.981823953438095
  }
}; /////////////////////////////////////////////////////////
// Viewing.Extension.PlantFactory
// by Philippe Leefsma, March 2017
//
/////////////////////////////////////////////////////////

var PlantFactoryExtension = function (_MultiModelExtensionB) {
  (0, _inherits3.default)(PlantFactoryExtension, _MultiModelExtensionB);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function PlantFactoryExtension(viewer, options) {
    (0, _classCallCheck3.default)(this, PlantFactoryExtension);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PlantFactoryExtension.__proto__ || (0, _getPrototypeOf2.default)(PlantFactoryExtension)).call(this, viewer, options));

    _this.onStopResize = _this.onStopResize.bind(_this);

    _this.render = _this.render.bind(_this);

    _this.react = options.react;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(PlantFactoryExtension, [{
    key: 'load',


    /////////////////////////////////////////////////////////
    // Load callback
    //
    /////////////////////////////////////////////////////////
    value: function load() {
      var _this2 = this;

      this.viewer.setProgressiveRendering(true);

      window.addEventListener('resize', this.onStopResize);

      this.react.setState({

        showLoader: true,

        // Project
        projectAreaData: [],
        projectDisciplineData: [],

        // Piping
        pipingSystemData: [],
        pipingPriorityData: [],
        pipingFabricationStatusData: [],
        pipingMaterialStatusData: [],
        pipingProgressData: [],
        pipingIWPData: [],

        //Foundation
        foundationStatusData: [],
        foundationIWPData: [],

        //Structure
        structureStatusData: [],
        structureProgressData: [],

        //Equipment
        equipmentTagData: [],
        equipmentROSData: [],

        //Instrumentation
        instrumentationTagData: [],

        //Electrical
        electricalStatusData: [],

        //Schedule
        scheduleActivitiesData: []

      }).then(function () {

        _this2.react.pushRenderExtension(_this2);
      });

      this.viewer.loadDynamicExtension('Viewing.Extension.ContextMenu', {
        buildMenu: function buildMenu(menu, selectedDbId) {
          return !selectedDbId ? [{
            title: 'Show all objects',
            target: function target() {
              _Viewer4.default.isolateFull(_this2.viewer);
              _this2.viewer.fitToView();
            } }] : menu;
        }
      });

      console.log('Viewing.Extension.PlantFactory loaded');

      return true;
    }

    /////////////////////////////////////////////////////////
    // Unload callback
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'unload',
    value: function unload() {

      console.log('Viewing.Extension.PlantFactory unloaded');

      window.removeEventListener('resize', this.onStopResize);

      (0, _get3.default)(PlantFactoryExtension.prototype.__proto__ || (0, _getPrototypeOf2.default)(PlantFactoryExtension.prototype), 'unload', this).call(this);

      return true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded() {

      this.options.loader.show(false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onToolbarCreated',
    value: function onToolbarCreated() {

      this.viewer.restoreState(stateInit);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onGeometryLoaded',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this3 = this;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Viewer4.default.getLeafNodes(this.viewer.model);

              case 2:
                this.componentIds = _context.sent;


                //const chartProperties =
                //  this.options.chartProperties ||
                //  await Toolkit.getPropertyList(
                //  this.viewer, this.componentIds)

                ///////////////////////////////////////////////////
                // Project
                //
                ///////////////////////////////////////////////////
                //Area - USER Yara : Yara Area (Pie)
                this.buildPropertyData('Yara Area').then(function (projectAreaData) {

                  _this3.react.setState({
                    projectAreaGuid: _this3.guid(),
                    projectAreaData: projectAreaData
                  });
                });

                //Discipline - USER Yara : Yara Discipline (Pie)
                this.buildPropertyData('Yara Discipline').then(function (projectDisciplineData) {

                  _this3.react.setState({
                    projectDisciplineGuid: _this3.guid(),
                    projectDisciplineData: projectDisciplineData
                  });
                });

                ///////////////////////////////////////////////////
                // piping
                //
                ///////////////////////////////////////////////////
                //System - WP : SystemName (Pie)
                this.buildPropertyData('SystemName').then(function (pipingSystemData) {

                  _this3.react.setState({
                    pipingSystemGuid: _this3.guid(),
                    pipingSystemData: pipingSystemData
                  });
                });

                //Priority - WP : ISO_Priority (Pie)
                this.buildPropertyData('ISO_Priority').then(function (pipingPriorityData) {

                  _this3.react.setState({
                    pipingPriorityGuid: _this3.guid(),
                    pipingPriorityData: pipingPriorityData
                  });
                });

                //Fabrication Status - WP : Fab Status (Pie)
                this.buildPropertyData('Fab Status').then(function (pipingFabricationStatusData) {

                  _this3.react.setState({
                    pipingFabricationStatusGuid: _this3.guid(),
                    pipingFabricationStatusData: pipingFabricationStatusData
                  });
                });

                //Material Status - WP : PipeFieldMats (Pie)
                this.buildPropertyData('PipeFieldMats').then(function (pipingMaterialStatusData) {

                  _this3.react.setState({
                    pipingMaterialStatusGuid: _this3.guid(),
                    pipingMaterialStatusData: pipingMaterialStatusData
                  });
                });

                //Progress - WP : Cobra_AG_Pipe_P3 (Pie)
                this.buildPropertyData('Cobra_AG_Pipe_P3').then(function (pipingProgressData) {

                  _this3.react.setState({
                    pipingProgressGuid: _this3.guid(),
                    pipingProgressData: pipingProgressData
                  });
                });

                //IWP - WP : WorkPackName (List)
                this.buildPropertyData('WorkPackName').then(function (pipingIWPData) {

                  _this3.react.setState({
                    pipingIWPGuid: _this3.guid(),
                    pipingIWPData: pipingIWPData
                  });
                });

                ///////////////////////////////////////////////////
                // foundation
                //
                ///////////////////////////////////////////////////
                //Status - WP : Foundation_Status (Pie)
                this.buildPropertyData('Foundation_Status').then(function (foundationStatusData) {

                  _this3.react.setState({
                    foundationStatusGuid: _this3.guid(),
                    foundationStatusData: foundationStatusData
                  });
                });

                //IWP - WP : Foundation_IWP (List)
                this.buildPropertyData('Foundation_IWP').then(function (foundationIWPData) {

                  _this3.react.setState({
                    foundationIWPGuid: _this3.guid(),
                    foundationIWPData: foundationIWPData
                  });
                });

                ///////////////////////////////////////////////////
                // Structure
                //
                ///////////////////////////////////////////////////
                //Status - WP : Cobra_Sequence_Percent (Pie)
                this.buildPropertyData('Cobra_Sequence_Percent').then(function (structureStatusData) {

                  _this3.react.setState({
                    structureStatusGuid: _this3.guid(),
                    structureStatusData: structureStatusData
                  });
                });

                //Progress - WP : Cobra_Sequence_ROC (Pie)
                this.buildPropertyData('Cobra_Sequence_ROC').then(function (structureProgressData) {

                  _this3.react.setState({
                    structureProgressGuid: _this3.guid(),
                    structureProgressData: structureProgressData
                  });
                });

                ///////////////////////////////////////////////////
                // Equipment
                //
                ///////////////////////////////////////////////////
                // Tag - WP : Tag Number (List)
                this.buildPropertyData('Tag Number').then(function (equipmentTagData) {

                  _this3.react.setState({
                    equipmentTagGuid: _this3.guid(),
                    equipmentTagData: equipmentTagData
                  });
                });

                //ROS - WP : ActualReceipt (Line or Bar)
                this.buildPropertyData('ActualReceipt').then(function (equipmentROSData) {

                  _this3.react.setState({
                    equipmentROSGuid: _this3.guid(),
                    equipmentROSData: equipmentROSData
                  });
                });

                ///////////////////////////////////////////////////
                // Instrumentation
                //
                ///////////////////////////////////////////////////
                //Tag - WP : TAG NUMBER (List)
                this.buildPropertyData('TAG NUMBER').then(function (instrumentationTagData) {

                  _this3.react.setState({
                    instrumentationTagGuid: _this3.guid(),
                    instrumentationTagData: instrumentationTagData
                  });
                });

                ///////////////////////////////////////////////////
                // Electrical
                //
                ///////////////////////////////////////////////////
                //Status - WP: Cobra_Tray (Pie)
                this.buildPropertyData('Cobra_Tray').then(function (electricalStatusData) {

                  _this3.react.setState({
                    electricalStatusGuid: _this3.guid(),
                    electricalStatusData: electricalStatusData
                  });
                });

                ///////////////////////////////////////////////////
                // Schedule
                //
                ///////////////////////////////////////////////////
                //Activities - WP : Activity Name (List)
                this.buildPropertyData('Activity Name').then(function (scheduleActivitiesData) {

                  _this3.react.setState({
                    scheduleActivitiesGuid: _this3.guid(),
                    scheduleActivitiesData: scheduleActivitiesData
                  });
                });

                this.react.setState({
                  showLoader: false
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onGeometryLoaded() {
        return _ref.apply(this, arguments);
      }

      return onGeometryLoaded;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createMaterial',
    value: function createMaterial(clrStr) {

      var clr = parseInt(clrStr.replace('#', ''), 16);

      var props = {
        shading: THREE.FlatShading,
        name: this.guid(),
        specular: clr,
        shininess: 0,
        emissive: 0,
        diffuse: 0,
        color: clr
      };

      var material = new THREE.MeshPhongMaterial(props);

      this.viewer.impl.matman().addMaterial(props.name, material, true);

      return material;
    }

    /////////////////////////////////////////////////////////
    // Group object map for small values:
    // If one entry of the map is smaller than minPercent,
    // this entry will be merged in the "group" entry
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'groupMap',
    value: function groupMap(map, group, totalValue, minPercent) {

      return (0, _transform2.default)(map, function (result, value, key) {

        if (value.length * 100 / totalValue < minPercent) {

          result[group] = (result[group] || []).concat(value);
        } else {

          result[key] = value;
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildPropertyData',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(propName) {
        var _this4 = this;

        var componentsMap, key, groupedMap, keys, colors, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Viewer4.default.mapComponentsByProp(this.viewer.model, propName, this.componentIds);

              case 2:
                componentsMap = _context2.sent;


                for (key in componentsMap) {

                  if (!key.length || key.indexOf('<') > -1) {

                    delete componentsMap[key];
                  }
                }

                groupedMap = this.groupMap(componentsMap, 'Other', this.componentIds.length, 2.0);
                keys = (0, _keys2.default)(groupedMap);
                colors = _d2.default.scale.linear().domain([0, keys.length * .33, keys.length * .66, keys.length]).range(['#FCB843', '#C2149F', '#0CC4BD', '#0270E9']);
                data = keys.map(function (key, index) {

                  var dbIds = groupedMap[key];

                  var color = colors(index);

                  var percent = 100 * dbIds.length / _this4.componentIds.length;

                  return {
                    label: key + ': ' + percent.toFixed(2) + '% (' + dbIds.length + ')',
                    material: _this4.createMaterial(color),
                    value: dbIds.length,
                    shortLabel: key,
                    percent: percent,
                    dbIds: dbIds,
                    color: color,
                    index: index
                  };
                });
                return _context2.abrupt('return', data);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function buildPropertyData(_x) {
        return _ref2.apply(this, arguments);
      }

      return buildPropertyData;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onStopResize',
    value: function onStopResize() {

      this.react.setState({

        //project
        projectAreaGuid: this.guid(),
        projectDisciplineGuid: this.guid(),

        //piping
        pipingSystemGuid: this.guid(),
        pipingPriorityGuid: this.guid(),
        pipingFabricationStatusGuid: this.guid(),
        pipingMaterialStatusGuid: this.guid(),
        pipingProgressGuid: this.guid(),
        pipingIWPGuid: this.guid(),

        //foundation
        foundationStatusGuid: this.guid(),
        foundationIWPGuid: this.guid(),

        //Structure
        structureStatusGuid: this.guid(),
        structureProgressGuid: this.guid(),

        //Equipment
        equipmentTagGuid: this.guid(),
        equipmentROSGuid: this.guid(),

        //Instrumentation
        instrumentationTagGuid: this.guid(),

        //Electrical
        electricalStatusGuid: this.guid(),

        //Schedule
        scheduleActivitiesGuid: this.guid()
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var state = this.react.getState();

      var style = state.showLoader ? {
        overflow: 'hidden',
        height: '100%'
      } : {};

      return _react2.default.createElement(
        'div',
        { className: this.className, style: style },
        _react2.default.createElement(_Loader.ReactLoader, { show: state.showLoader }),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Project' },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Area',
            style: { float: "left", width: "50%" },
            guid: state.projectAreaGuid,
            data: state.projectAreaData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Discipline',
            style: { float: "left", width: "50%" },
            guid: state.projectDisciplineGuid,
            data: state.projectDisciplineData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Piping' },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'System',
            style: { float: "left", width: "50%" },
            guid: state.pipingSystemGuid,
            data: state.pipingSystemData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Priority',
            style: { float: "left", width: "50%" },
            guid: state.pipingPriorityGuid,
            data: state.pipingPriorityData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Fabrication Status',
            style: { float: "left", width: "50%" },
            guid: state.pipingFabricationStatusGuid,
            data: state.pipingFabricationStatusData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Material Status',
            style: { float: "left", width: "50%" },
            guid: state.pipingMaterialStatusGuid,
            data: state.pipingMaterialStatusData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Progress',
            style: { float: "left", width: "50%" },
            guid: state.pipingProgressGuid,
            data: state.pipingProgressData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyList2.default, { title: 'IWP',
            style: {
              width: "calc(50% - 0px)",
              position: "relative",
              float: "left",
              left: "-10px"
            },
            guid: state.pipingIWPGuid,
            data: state.pipingIWPData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Foundation' },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Status',
            style: { float: "left", width: "50%" },
            guid: state.foundationStatusGuid,
            data: state.foundationStatusData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyList2.default, { title: 'IWP',
            style: {
              width: "calc(50% - 0px)",
              position: "relative",
              float: "left",
              left: "-10px"
            },
            guid: state.foundationIWPGuid,
            data: state.foundationIWPData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Structure' },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Status',
            style: { float: "left", width: "50%" },
            guid: state.structureStatusGuid,
            data: state.structureStatusData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Progress',
            style: { float: "left", width: "50%" },
            guid: state.structureProgressGuid,
            data: state.structureProgressData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Equipment' },
          _react2.default.createElement(_PropertyList2.default, { title: 'Tag',
            style: {
              width: "calc(100% - 20px)",
              position: "relative",
              float: "left",
              left: "10px"
            },
            guid: state.equipmentTagGuid,
            data: state.equipmentTagData,
            viewer: this.viewer }),
          _react2.default.createElement(_PropertyBarChart2.default, { title: 'ROS',
            style: { float: "left", width: "100%" },
            guid: state.equipmentROSGuid,
            data: state.equipmentROSData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Instrumentation',
            style: {
              float: "left",
              width: "50%"
            } },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Tag',
            guid: state.instrumentationTagGuid,
            data: state.instrumentationTagData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Electrical',
            style: {
              float: "left",
              width: "50%"
            } },
          _react2.default.createElement(_PropertyPieChart2.default, { title: 'Status',
            guid: state.electricalStatusGuid,
            data: state.electricalStatusData,
            viewer: this.viewer })
        ),
        _react2.default.createElement(
          _WidgetContainer2.default,
          { title: 'Schedule' },
          _react2.default.createElement(_PropertyList2.default, { title: 'Activities',
            style: {
              width: "calc(100% - 20px)",
              position: "relative",
              float: "left",
              left: "10px"
            },
            guid: state.scheduleActivitiesGuid,
            data: state.scheduleActivitiesData,
            viewer: this.viewer })
        )
      );
    }
  }, {
    key: 'className',
    get: function get() {

      return 'plant-factory';
    }

    /////////////////////////////////////////////////////////
    // Extension Id
    //
    /////////////////////////////////////////////////////////

  }], [{
    key: 'ExtensionId',
    get: function get() {

      return 'Viewing.Extension.PlantFactory';
    }
  }]);
  return PlantFactoryExtension;
}(_Viewer2.default);

Autodesk.Viewing.theExtensionManager.registerExtension(PlantFactoryExtension.ExtensionId, PlantFactoryExtension);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewing.Extension.PlantFactory.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1825:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1405);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1405, function() {
			var newContent = __webpack_require__(1405);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=12.js.map