<template>
  <div class="app-container">
    <section class="app-navigation">
      <div class="app-navigation--icons">
        <span class="dot dot--red"></span>
        <span class="dot dot--yellow"></span>
        <span class="dot dot--green"></span>
      </div>

      <app-navigation></app-navigation>
    </section>

    <section class="app-content">
      <div class="app-content__date">
        19-07-2017
      </div>
      <app-issue-bar
              v-for="item in items1"
              :key="item.name"
              :item="item">
      </app-issue-bar>

      <div class="app-content__date">
        18-07-2017
      </div>
      <app-issue-bar
              v-for="item in items2"
              :key="item.name"
              :item="item">
      </app-issue-bar>

      <div class="app-content__date">
        15-07-2017
      </div>
      <app-issue-bar
              v-for="item in items3"
              :key="item.name"
              :item="item">
      </app-issue-bar>

      <div class="app-content__date">
        14-07-2017
      </div>
      <app-issue-bar
              v-for="item in itemsAll"
              :key="item.name"
              :item="item">
      </app-issue-bar>
    </section>
  </div>
</template>

<script>

  import navigation from './navigation/navigation'
  import issueBar from './issue-bar/issue-bar.vue'
  import App from "../App.vue";

export default {
  data () {
    return {
        items1: [
            {
                name: 'Page Changes',
                checked: true

            },
            {
                name: 'Review of last issues',
                checked: true

            }
        ],
        items2: [
            {
                name: 'Visual UI Update Review',
                checked: false
            },
            {
                name: 'Sidebar changes',
                checked: true
            }
        ],
        items3: [
            {
                name: 'Crash Update',
                checked: false
            },
            {
                name: 'Page visual UI Update',
                checked: true
            },
            {
                name: 'Sidebar update',
                checked: false
            },
        ],
        itemsAll: [
            {
                name: 'Page Changes',
                checked: true

            },
            {
                name: 'Review of last issues',
                checked: true

            },
            {
                name: 'Visual UI Update Review',
                checked: false
            },
            {
                name: 'Sidebar changes',
                checked: true
            },
            {
                name: 'Crash Update',
                checked: false
            },
            {
                name: 'Page visual UI Update',
                checked: true
            },
            {
                name: 'Sidebar update',
                checked: false
            },
        ]
    }
  },
    components: {
        App,
        appNavigation: navigation,
      appIssueBar: issueBar
    },
}
</script>

<style>
  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 650px;
    width: 100%;
    height: 500px;
  }

  .app-navigation {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.4);
    background-color: rgba(16, 16, 34, 0.95);
    width: 150px;
    height: 100%;
  }

  .app-navigation--icons {
    justify-content: center;
    padding: 10px 15px;
  }

  .dot {
    display: inline-flex;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }

  .dot--red {
    background-color:  #ff594f;
  }

  .dot--yellow {
    background-color:  #ffbc1b;
  }

  .dot--green {
    background-color:  #00cd46;
  }

  .app-content {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.4);
    background-color:  #f6f6f6;
    max-width: 500px;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding:10px 20px;
  }

  .app-content__date {
    color:  #8a8995;
    font-size: 12px;
    font-weight: 400;
    float: left;
    margin:5px 0 10px;
  }

  .app-content::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .app-content::-webkit-scrollbar
  {
    width: 4px;
    background-color: #e0e0e0;
  }

  .app-content::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #e0e0e0;
  }

  @media (max-width: 676px) {
    .app-container {
      flex-direction: column;
      height: auto;
    }

    .app-navigation {
      border-bottom-left-radius: 0;
      border-top-right-radius: 10px;
      width:100%;
      height: auto;
    }

    .app-content {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      max-width: 100%;
    }
  }

</style>