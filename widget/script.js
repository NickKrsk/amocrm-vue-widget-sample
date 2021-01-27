define(['./app.js?cache=' + Date.now() ], function(App) {


  const Widget = function () {

    const self = this;
    self.system = this.system();
    self.langs = this.langs;

    /** @private */
    this.callbacks = {
      render() {
        console.log('render in script');
        App.default.render(self);
        return true;
      },
      init() {
        console.log('init in script');
        App.default.init(self);
        return true;
      },
      bind_actions() {
        console.log('bind_actions in script');
        App.default.bind_actions(self);
        return true;
      },
      settings() {
        App.default.settings(self);
        return true;
      },
      onSave() {
        App.default.onSave(self);
        return true;
      },
      destroy() {
        App.default.destroy(self);
      },
      contacts: {
        selected() {
          App.default.contacts_selected(self);
        }
      },
      leads: {
        selected() {
          App.default.leads_selected(self);
        }
      },
      tasks: {
        selected() {
          App.default.tasks_selected(self);
        }
      }
    };

    return this;

  };

  return Widget;

});