package com.ufcqx.vale.valemobilidade.adapter;

/**
 * Created by samuel on 6/10/18.
 */


import android.content.Context;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

import com.ufcqx.vale.valemobilidade.fragment.ItineraryFragment;
import com.ufcqx.vale.valemobilidade.R;
import com.ufcqx.vale.valemobilidade.activity.MainActivity;

/**
 * A {@link FragmentPagerAdapter} that returns a fragment corresponding to
 * one of the sections/tabs/pages.
 */
public class SectionsPagerAdapter extends FragmentPagerAdapter {

    private Context context;

    public SectionsPagerAdapter(FragmentManager fm, Context context) {
        super(fm);
        this.context = context;
    }

    @Override
    public Fragment getItem(int position) {
        // getItem is called to instantiate the fragment for the given page.
        // Return a PlaceholderFragment (defined as a static inner class below).
        switch (position){
            case 0:
                return ItineraryFragment.newInstance();
        }
        return MainActivity.PlaceholderFragment.newInstance(position + 1);
    }

    @Override
    public CharSequence getPageTitle(int position) {
        switch (position) {
            case 0:
                return context.getResources().getString(R.string.ITINERARY_FRAGMENT_TITLE);
            case 1:
                return context.getResources().getString(R.string.ORDER_FRAGMENT_TITLE);
            case 2:
                return context.getResources().getString(R.string.RANK_FRAGMENT_TITLE);
        }
        return null;
    }

    @Override
    public int getCount() {
        // Show 3 total pages.
        return 3;
    }
}