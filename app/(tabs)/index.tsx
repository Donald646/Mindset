import { ArrowUpRight, Ellipsis, LayoutGrid, Maximize2Icon, PauseIcon, Play, PlayIcon, Quote, Star } from 'lucide-react-native'
import React from 'react'
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from '~/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function Index() {
  const [value, setValue] = React.useState('');
  return (
    <View className='h-screen flex flex-col bg-white'>
      <View className=' rounded-b-3xl py-8 bg-[#323232] shadow-sm'>
        <View className='flex flex-row items-center justify-between px-4'>
          <View className='flex-1 mt-20'>
            {/* Left side - empty */}
          </View>
          <View className='flex-1 items-center'>
            <Text className='text-white text-xl font-bold'>MINDSET</Text>
          </View>
          <View className='flex-1 items-end flex justify-center'>
            <LayoutGrid color="white" size={24} />
          </View>
        </View>
          
        <View className='px-5 flex flex-col  '>
          <Quote color="white" size={24} className="mb-"  fill={"white"}/>
          <Text className='text-white text-xl font-semibold mt-4'>
            If you don't get what you want, you SUFFER...
          </Text>
          <View className='mt-4'>
            <Maximize2Icon color="white" size={18} stroke={"white"} strokeWidth={3} />
          </View>
        </View>
      </View>

      <ScrollView className='flex-1' contentContainerStyle={{ paddingBottom: 80 }}>
        <View className='px-4 mt-4'>
          <View className='flex flex-row justify-between items-center'>
            <Text className='font-bold text-lg'>Day 15</Text>
            <View className='flex flex-row items-center'>
            </View>
            <TouchableOpacity>
              <Text className='text-gray-500'>Skip</Text>
            </TouchableOpacity>
          </View>
          
          <Tabs value="MON" className="w-full mt-4" onValueChange={setValue}>
            <TabsList className="flex-row rounded-xl w-full bg-[#e6e6e6] p-2">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                <TabsTrigger 
                  key={day} 
                  value={day} 
                  className={`flex-1 py-2 px-3 rounded-xl w-fit h-full `}
                >
                  <Text className={`text-xs font-bold ${index === 1 ? "text-white":""}`}>{day}</Text>
                  <Text className={`mt-1 font-bold ${index === 1 ? "text-white":""}`}>
                    {index + 8}
                  </Text>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <View className='mt-4 flex flex-col gap-2'>
            {[
              { title: 'Unleash Yourself', duration: '3 minutes - Lesson', image: require('~/assets/images/mask1.png') },
              { title: 'How to Improve Your Focus', duration: '5 minutes - Lesson', image: require('~/assets/images/mask2.png') },
              { title: 'Walk 20,000 Steps', subtitle: 'Daily Goal', image: require('~/assets/images/mask3.png') },
            ].map((item, index) => (    
              <View key={index} className='flex flex-row items-center shadow-sm w-full'>
                <Image 
                  source={item.image} 
                  style={{ resizeMode: 'contain' }}
                />
                <View className='flex-1 justify-between flex-row h-full p-4 bg-white rounded-r-3xl'>
                  <View>
                    <Text className='font-semibold text-xl'>{item.title}</Text>
                    <Text className='text-gray-500'>{item.duration || item.subtitle}</Text>
                  </View>
                  <TouchableOpacity className='flex flex-col justify-center'>
                    <PlayIcon fill={"#323232"} color={"#323232"} height={60} width={32} className='mr-5'/>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          
          <View className='mt-8'>
            <View className='flex flex-row justify-between items-center'>
              <Text className='font-bold'>Notes</Text>
              <TouchableOpacity>
                <Text className='text-gray-500'>See all notes</Text>
              </TouchableOpacity>
            </View>
            
            <View className='flex flex-row mt-2 gap-2'>
              <View className='w-1/2'>
                <TouchableOpacity className='h-40 bg-white rounded-xl flex items-center justify-center border-dashed border-gray-300 border-2'>
                  <Text className='text-4xl text-gray-300'>+</Text>
                </TouchableOpacity>
                <TouchableOpacity className='h-40 bg-white flex flex-col justify-between rounded-xl p-4 mt-2 border-[1px] border-gray-300'>
                  <View>
                  <Text className='font-semibold'>Lorem ipsum dolor sit amet.</Text>
                  <Text className='text-gray-500 text-xs mt-2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</Text>
                  </View>
                 
                  <View className='flex flex-row justify-between'>
                 <Text className='text-gray-500 text-xs mt-2'>57s ago</Text>
                <View className='flex flex-row gap-2'>
<Star fill={"#ffb701"} strokeWidth={0}/><Ellipsis color={"black"}/>
                </View>
                 </View>
                </TouchableOpacity>
              </View>
              <View className='w-1/2'>
              <TouchableOpacity className='h-40 bg-white flex flex-col justify-between rounded-xl p-4 border-[1px] border-gray-300'>
                  <View>
                  <Text className='font-semibold'>Lorem ipsum dolor sit amet.</Text>
                  <Text className='text-gray-500 text-xs mt-2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</Text>
                  </View>
                 
                  <View className='flex flex-row justify-between'>
                 <Text className='text-gray-500 text-xs mt-2'>57s ago</Text>
                <View className='flex flex-row gap-2'>
<Star  color={"#ffb701"} strokeWidth={2}/><Ellipsis color={"black"}/>
                </View>
                 </View>
                </TouchableOpacity>
                <TouchableOpacity className='h-40 bg-white flex flex-col justify-between rounded-xl p-4 mt-2 border-[1px] border-gray-300'>
                  <View>
                  <Text className='font-semibold'>Lorem ipsum dolor sit amet.</Text>
                  <Text className='text-gray-500 text-xs mt-2'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</Text>
                  </View>
                 <View className='flex flex-row justify-between'>
                 <Text className='text-gray-500 text-xs mt-2'>57s ago</Text>
                <View className='flex flex-row gap-2'>
<Star fill={"#ffb701"} strokeWidth={0}/><Ellipsis color={"black"}/>
                </View>
                 </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}