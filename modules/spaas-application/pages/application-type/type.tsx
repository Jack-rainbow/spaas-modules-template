import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class FilterItem extends Vue {
  protected render(h) {
    return (
      <div>
        <div>这条是jsx</div>
      </div>
    )
  }
}
