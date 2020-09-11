function startTutorial(p_tutorial_name) {
  if (!window.omnis_ui_assistant) {
    // Instantiate the component.
    window.omnis_ui_assistant = createOmnis({
      p_callback_end: function(){ delete window.omnis_ui_assistant; }
    });
    // Setting the tutorial to the default example tutorial `main`.
    var v_tutorial_name = (p_tutorial_name) ? p_tutorial_name : 'main';
    // Configuring the available tutorials.
    var v_tutorials = {
      'main': [
        {
          p_message: 'This contains the outer connection and global panels [ connections_list_manager, snippets_panel, [conn_1, conn_2, ...], add_connection]',
          p_target: document.getElementsByClassName('omnidb__tab-menu omnidb__tab-menu--primary')[0],
          p_title: 'Primary menu'
        },
        {
          p_message: 'This contains general settings and options, such as [ versioning, connections_list_manager, user_setting, plugins...]',
          p_target: document.getElementsByClassName('omnidb__utilities-menu')[0],
          p_title: 'Utilities menu'
        }
      ],
      'utilities_menu': [
        {
          p_callback_end: function() {$('.omnidb__utilities-menu').removeClass('omnidb__utilities-menu--show');},
          p_callback_start: function() {$('.omnidb__utilities-menu').addClass('omnidb__utilities-menu--show');},
          p_message: `
          <p>Contains general settings and options:</p>
          <ul>
          <li>Username and versioning.</li>
          <li><i class="fas fa-plug mr-2"></i>Connection management.</li>
          <li><i class="fas fa-user mr-2"></i>User management.</li>
          <li><i class="fas fa-cog mr-2"></i>UI settings (shortcuts, theme, fonts...).</li>
          <li><i class="fas fa-cube mr-2"></i>Plugins management.</li>
          <li><i class="fas fa-sign-out-alt mr-2"></i>About.</li>
          </ul>
          `,
          p_target: document.getElementsByClassName('omnidb__utilities-menu')[0],
          p_title: 'Utilities Menu',
          p_update_delay: 300
        },
        {
          p_callback_end: function() {$('.omnidb__utilities-menu').removeClass('omnidb__utilities-menu--show');},
          p_callback_start: function() {$('.omnidb__utilities-menu').addClass('omnidb__utilities-menu--show');},
          p_message: `
          <p>If you just configured OmniDB and logged with the default <strong>admin</strong> user, you should create the first user.</p>
          `,
          p_target: $('.omnidb__utilities-menu').find('.fa-user')[1],
          p_title: 'Managing Users'
        },
        {
          p_callback_end: function() {$('.omnidb__utilities-menu').removeClass('omnidb__utilities-menu--show');},
          p_callback_start: function() {listUsers();},
          p_message: `
          <p>Click on <strong>Add new user</strong>.</p>
          `,
          p_target: function() {var v_target = document.getElementById('omnidb_utilities_menu_btn_new_user'); return v_target},
          p_title: 'Add a New User',
          p_update_delay: 600
        },
        {
          p_callback_start: function() {newUser();},
          p_message: `
          <ul>
          <li><i class="fas fa-user mr-2"></i>OmniDB login name.</li>
          <li><i class="fas fa-key mr-2"></i>OmniDB login password.</li>
          <li><i class="fas fa-star mr-2"></i>Defines if the user can manage other OmniDB users.</li>
          </ul>
          `,
          p_target: function() {var v_target = document.getElementById('omnidb_user_content'); return v_target},
          p_title: 'User Options',
          p_update_delay: 350
        }
      ]
    }
    // Selecting a tutorial
    var v_steps = v_tutorials[v_tutorial_name];
    // Update the step list with the new walkthrough
    window.omnis_ui_assistant.updateStepList(v_steps);
    // Go to the first step of the walkthrough
    window.omnis_ui_assistant.goToStep(0);
  }
}
