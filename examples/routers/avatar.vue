<template>
    <div class="demo-avatar">
        <QAvatar :style="{background: color}">{{ user }}</QAvatar>
        <QButton size="small" @click="handleChange">Change</QButton>
        <div>
            <div class="demo-avatar">
                <QAvatar icon="ios-person" size="large" />
                <QAvatar icon="ios-person" />
                <QAvatar icon="ios-person" size="small" />
            </div>
            <div class="demo-avatar">
                <QAvatar shape="square" icon="ios-person" size="large" />
                <QAvatar shape="square" icon="ios-person" />
                <QAvatar shape="square" icon="ios-person" size="small" />
            </div>
        </div>
        <div class="demo-avatar">
            <QAvatar icon="ios-person" />
            <QAvatar>U</QAvatar>
            <QAvatar>USER</QAvatar>
            <QAvatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <QAvatar style="color: #f56a00;background-color: #fde3cf">U</QAvatar>
            <QAvatar style="background-color: #87d068" icon="ios-person" />
        </div>
        <div class="demo-avatar-badge">
            <QBadge :count="1">
                <QAvatar shape="square" icon="ios-person" />
            </QBadge>
            <QBadge dot>
                <QAvatar shape="square" icon="ios-person" />
            </QBadge>
        </div>
        <br><br><br>
        <QAvatar custom-icon="ivu-icon-ios-person" />

        <QAvatar :src="src" size="large" @on-error="handleError" />
        <QDivider></QDivider>
        <QAvatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="64" shape="square" />
        <QAvatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="64" shape="circle" />
        <QAvatar icon="ios-person" size="64" shape="circle" />
        <QAvatar size="42">U</QAvatar>
    </div>
</template>
<script>
    const UserList = ['二', '小二', '三', '二个人'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    export default {
        data () {
            return {
                user: UserList[0],
                color: ColorList[0],
                src: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj41/avatar'
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            },
            handleError () {
                this.src = 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar';
            }
        }
    }
</script>
