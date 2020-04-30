import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'RenderBread'
  // functional: true,
})
export default class extends Vue {
  // @ts-ignore
  @Prop({ default: () => {} }) render?: Function;
  @Prop() node?: Array<any>;
  @Prop() data?: object;

  // @ts-ignore
  render(h, ctx) {
    const params = {
      data: ctx.props.data
    }
    return ctx.props.render(h, params)
  }
}
